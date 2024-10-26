#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <EEPROM.h>  // For saving calibration values
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 32
#define OLED_RESET -1
#define SCREEN_ADDRESS 0x3C
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

#define MAX_DISTANCE 400 // Max distance for the ultrasonic sensor (in cm)

#define echoPin 32
#define trigPin 33
#define calibutton 19

long duration;
int emptyDistance; // Distance when the tank is empty
int fullDistance;  // Distance when the tank is full
int currentDistance; 
int waterLevel;
bool calibrated = false;
boolean DEBUG_MODE = 1;
volatile bool buttonPressed = false; // Flag to indicate button press
unsigned long buttonPressTime  = 0; // Tracks when the button was first pressed
bool calibrationTriggered = false;
int calibrationStep = 0;             // Tracks current calibration step
unsigned long lastCalibrationTime = 0; // Tracks time for delays


void setup() {
  Serial.begin(9600);
  
  // Check if calibration data exists in EEPROM
  //EEPROM.get(0, emptyDistance);
  //EEPROM.get(2, fullDistance);

  emptyDistance = 20;
  fullDistance =500;

  if (emptyDistance == 0 || fullDistance == 0) {
    // Calibration needed
    Serial.println("Calibration required!");
    calibrated = false;
  } else {
    // Calibration data exists
    Serial.println("Using saved calibration data.");
    calibrated = true;
  }
  
  if (!display.begin(SSD1306_SWITCHCAPVCC, SCREEN_ADDRESS)) {
    Serial.println(F("SSD1306 allocation failed"));
    for (;;);
  }
  
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(0, 5);
  display.print("Booting");
  Serial.println("\nProject Started");
  delay(1000);
  
  pinMode(trigPin, OUTPUT);  // Sets the trigPin as an OUTPUT
  pinMode(echoPin, INPUT);   // Sets the echoPin as an INPUT
  pinMode(calibutton, INPUT_PULLUP); // Set up button pin as input with pull-up resistor
   attachInterrupt(digitalPinToInterrupt(calibutton), onButtonPress, FALLING);  // Trigger on falling edge (button press)
}

void loop() {
   checkButtonForCalibration();

  if (!calibrated) {
    calibrateTank();
  } else {
    currentDistance = getMeanDistance();  // Get mean of 5 readings
    
    if (currentDistance > 0) {  // Valid reading
      waterLevel = map(currentDistance, emptyDistance, fullDistance, 0, 100);
      
      // Check if waterLevel is out of range and display the message
      if (waterLevel < 0 || waterLevel > 100) {
        display.clearDisplay();
        display.setTextSize(1);
        display.setCursor(5, 15);
        display.print("Please place device");
        display.setCursor(25, 25);
        display.print("in the tank");
        display.display();
      } else {
        Serial.print("Water level: ");
        Serial.print(waterLevel);
        Serial.println("%");

        if (waterLevel <= 5) {
          Serial.println("Tank is empty!");
        } else if (waterLevel >= 95) {
          Serial.println("Tank is full!");
        } else {
          Serial.println("Tank is average");
        }
        
        update_OLED();
      }
    }
    delay(1000);
  }
  
}

// Function to get distance reading from the ultrasonic sensor
int getDistance() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(20);
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  int distance = duration * 0.034 / 2;
   Serial.print("Distance: ");
  Serial.print (distance); 
  Serial.println (" cm");
  delay(10);
  return distance;
}

// Function to take 5 readings and return the mean
int getMeanDistance() {
  int sum = 0;
  for (int i = 0; i < 5; i++) {
    int distance2 = getDistance();
    sum += distance2;
    delay(50); // Short delay between readings for stability
  }
  return sum / 5;
}

// Update OLED display with current distance reading
void update_OLED() {
  display.setTextSize(1);
  display.clearDisplay();
  display.setCursor(15, 8);
  display.print("Distance: ");
  display.setCursor(70, 8);
  display.print(currentDistance);  // Use currentDistance here
  display.setCursor(90, 8);
  display.print("cm");

  display.setTextSize(2);
  display.setCursor(5, 17);
  display.print("Level: ");
  display.setCursor(80, 17);
  display.print(waterLevel);  // Use currentDistance here

// Calculate the width of the waterLevel value in pixels
int waterLevelWidth = String(waterLevel).length() * 12;  // Estimate width
int percentageXPos = 80 + waterLevelWidth + 5;           // Position 15 pixels after water level

display.setCursor(percentageXPos, 17);
display.print("%");
  display.display();
}

// Debug print function
void debugPrint(String text) {
  if (DEBUG_MODE == 1)
    Serial.println(text);
}

// Calibration function (step-by-step non-blocking)
void calibrateTank() {
  unsigned long currentTime = millis();

  switch (calibrationStep) {
    case 0:  // Step 0: Display message to empty tank
      display.clearDisplay();
      display.setTextSize(1);
      display.setCursor(15, 10);
      display.print("Ensure tank is ");
      display.setTextSize(2);
      display.setCursor(30, 17);
      display.print("Empty");
      display.display();
      Serial.println("Ensure tank is empty");
      calibrationStep = 1;
      lastCalibrationTime = currentTime;  // Start the wait time
      break;

    case 1:  // Step 1: Wait for 10 seconds
      if (currentTime - lastCalibrationTime >= 10000) {
        emptyDistance = getMeanDistance();
        EEPROM.put(0, emptyDistance);  // Save to EEPROM
        Serial.print("Empty tank distance: ");
        Serial.println(emptyDistance);
        calibrationStep = 2;  // Move to next step
      }
      break;

    case 2:  // Step 2: Display message to fill tank
      display.clearDisplay();
      display.setTextSize(1);
      display.setCursor(15, 3);
      display.print("Ensure tank is");
      display.setTextSize(2);
      display.setCursor(40, 17);
      display.print("Full");
      display.display();
      Serial.println("Ensure tank is full");
      calibrationStep = 3;
      lastCalibrationTime = currentTime;  // Reset wait time
      break;

    case 3:  // Step 3: Wait for 10 seconds
      if (currentTime - lastCalibrationTime >= 10000) {
        fullDistance = getMeanDistance();
        EEPROM.put(2, fullDistance);  // Save to EEPROM
        Serial.print("Full tank distance: ");
        Serial.println(fullDistance);
        calibrated = true;  // Calibration complete
        Serial.println("Calibration completed.");
      }
      break;
  }
}

// Interrupt Service Routine (ISR) for button press
void onButtonPress() {
  if (!buttonPressed) {  // Only set if it's not already pressed
    buttonPressTime = millis();  // Record the time of the press
    buttonPressed = true;        // Set the flag
  }
}

// Main function to check button hold duration
void checkButtonForCalibration() {
  if (buttonPressed) {
    // Check if button is held down for 6 seconds
    if (digitalRead(calibutton) == LOW && (millis() - buttonPressTime >= 6000)) {
      Serial.println("Entering Calibration Mode...");
      calibrationStep = 0;     // Reset calibration step
      calibrated = false;      // Trigger calibration process
      buttonPressed = false;   // Reset flag after triggering
    } else if (digitalRead(calibutton) == HIGH) { // Button released before 6 seconds
      buttonPressed = false;    // Reset flag
    }
  }
}
