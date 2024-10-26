import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Svg, Path, Circle, Defs, Mask, Rect, G } from 'react-native-svg';
import Reanimated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
  runOnJS
} from 'react-native-reanimated';

import { GetWidth, GetHeight } from '../util/GetScreenDimension';

const AnimatedPath = Reanimated.createAnimatedComponent(Path);
const AnimatedCircle = Reanimated.createAnimatedComponent(Circle);
const AnimatedG = Reanimated.createAnimatedComponent(G);

const refWidth = 173;
const refHeight = 243;
const refBubbleR = 3;
const scale = Math.min(GetWidth(refWidth), GetHeight(refHeight)) / refWidth;

const generateBubbles = (count, maxHeight) => {
  const bubbles = [];
  for (let i = 0; i < count; i++) {
    const x = Math.random() * refWidth * scale;
    const y = Math.random() * maxHeight * scale;
    const r = Math.random() * refBubbleR * scale + 2 * scale;
    const opacity = Math.random() * 0.3 + 0.5;
    bubbles.push({ x, y, r, opacity });
  }
  return bubbles;
};

const Bubble = ({ bubble, waterLevel }) => {
  const startY = -243;
  const endY = 100;
  const progress = useSharedValue(0);

  const animateBubble = () => {
    progress.value = 0;
    progress.value = withTiming(
      1,
      { duration: bubble.r * 10000 },
      (isFinished) => {
        if (isFinished) {
          runOnJS(animateBubble)();
        }
      }
    );
  };

  useEffect(() => {
    animateBubble();
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const y = interpolate(
      progress.value,
      [0, 1],
      [startY, endY]
    );

    const visibility = y <= waterLevel.value ? 1 : 0;
    const translateY = -y + (1 - visibility) * (waterLevel.value - endY);

    return {
      opacity: bubble.opacity * visibility,
      transform: [{ translateY: translateY }],
    };
  });

  return (
    <AnimatedCircle
      cx={bubble.x}
      cy={bubble.y}
      r={bubble.r}
      fill="white"
      style={animatedStyle}
    />
  );
};

const WaterTank = ({ waterLevelValue, amplitudeValue, numWavesValue,   waveSpeed = 1}) => {
  const [bubbles, setBubbles] = useState([]);
  const waterLevel = useSharedValue(waterLevelValue); // Set initial water level
  const phase = useSharedValue(0);
  const numWaves = useSharedValue(numWavesValue);
  const amplitude = useSharedValue(amplitudeValue);

  useEffect(() => {
    setBubbles(generateBubbles(20, 100 - 20));
  }, []);

  useEffect(() => {
    waterLevel.value = withTiming(waterLevelValue); // Update water level when prop changes
  }, [waterLevelValue]);

  useEffect(() => {
    amplitude.value = amplitudeValue; // Update amplitude when prop changes
  }, [amplitudeValue]);

  useEffect(() => {
    numWaves.value = numWavesValue; // Update numWaves when prop changes
  }, [numWavesValue]);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      phase.value = (phase.value + (2 * Math.PI * waveSpeed) / 100) % (2 * Math.PI);
    }, 100 / waveSpeed);

    return () => clearInterval(intervalId);
  }, [waveSpeed]);


  const animatedProps = (reverse) => {
    return useAnimatedProps(() => {
      const frequency = numWaves.value;
      let d = `M 0 ${243 - waterLevel.value / 100 * 230}`;


      for (let x = 1; x <= 173; x++) {
        const y =
        243 - waterLevel.value / 100 * 230 - amplitude.value * Math.sin((x * frequency * Math.PI) / 100 + phase.value * (reverse ? -1 : 1));
        d += `L ${x} ${y}`;
      }
      d += `
              L 173 243
              L 0 243
              Z
            `;
      return { d };
    });
  };

  const renderedBubbles = bubbles.map((bubble, index) => {
    return <Bubble key={index} bubble={bubble} waterLevel={waterLevel} />;
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={refWidth * scale}
        height={refHeight * scale}
        viewBox={`0 0 ${refWidth} ${refHeight}`}
        fill="none"
      >
        <Rect
          width={refWidth - 2}
          height={refHeight - 2 * 12}
          x="1"
          y="12"
          fill="#fff"
          stroke="#12B293"
          strokeWidth={2 * scale}
          rx={19 * scale}
        />

        <Defs>
        <Mask id="tankMask">
        <Rect
              width={refWidth - 2}
              height={refHeight - 2 * 12}
          x="1"
          y="12"
          fill="#fff"
          stroke="#12B293"
          strokeWidth={2 * scale}
          rx={19 * scale}></Rect>
          </Mask>
          <Mask id="waterMask">

            <AnimatedPath animatedProps={animatedProps(false)} fill="white" />
            <AnimatedPath animatedProps={animatedProps(true)} fill="white" />
          </Mask>
        </Defs>
        <AnimatedPath  mask="url(#tankMask)" animatedProps={animatedProps(false)} fill="#12B293" fillOpacity="0.5" />
        <AnimatedG mask="url(#waterMask)">{renderedBubbles}</AnimatedG>
        <AnimatedPath  mask="url(#tankMask)" animatedProps={animatedProps(true)} fill="#12B293" fillOpacity="0.6" />
        <Path
          stroke="#12B293"
          strokeLinecap="round"
          strokeWidth="7"
          d="M67.5 4h40"></Path>
      </Svg>
    </View>
  );
};

export default WaterTank;
