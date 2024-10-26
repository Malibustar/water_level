import MQTT from 'sp-react-native-mqtt';
import DeviceInfo from 'react-native-device-info';

class MQTTClient {
  constructor() {
    this.client = null;
  }

  connectClient = (messageHandler, closedHandler, errorHandler, connectHandler) => {
    let deviceId;

    DeviceInfo.getUniqueId().then((uniqueId) => {
        deviceId = uniqueId;
        });

    return new Promise((resolve, reject) => {
      MQTT.createClient({
        uri: 'mqtt://broker.hivemq.com:1883',
        clientId: deviceId
      }).then((newClient) => {
        this.client = newClient;

        this.client.on('message', messageHandler);
        this.client.on('closed', closedHandler);
        this.client.on('error', errorHandler);
        this.client.on('connect', connectHandler);

        this.client.connect();
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }

  subscribeTo = (topic) => {
    if (this.client) {
      this.client.subscribe(topic, 0);
    } else {
      throw new Error('Client is not created. Cannot subscribe.');
    }
  }

  disconnect = () => {
    if (this.client) {
      this.client.disconnect();
      this.client = null;
    }
  }
}

export default MQTTClient;
