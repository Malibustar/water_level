import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HanburgerIcon from '../assets/hambuder';
import BellIcon from '../assets/bell';
import WaterLevel from '../assets/waterTank';
import {ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Button from '../components/button';
import VerticalGragh from '../components/verticalGragh';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';
import {Dimensions} from 'react-native';
import HandBugger from '../components/handBugger';
import ArrowLeftIcon from '../assets/arrowRight';
import ArrowRightIcon from '../assets/arrowLeft';
import MQTTClient from '../util/MQTTClient';
import WaterTank from './waterTank';
import { GetFont, GetHeight, GetWidth } from '../util/GetScreenDimension';

const Poseidon = ({navigation}) => {
  waterLevelArray = [
    {litre: '500L'},
    {litre: '1000L'},
    {litre: '2000L'},
    {litre: '4000L'},
    {litre: '6000L'},
    {litre: '8000L'},
    {litre: '10000L'},
  ];

  const [active, setActive] = useState('5000L');
  const [waterLevel, setWaterLevel] = useState(0);

useEffect(() => {
  const mqttClient = new MQTTClient();

  const messageHandler = (msg) => {
    console.log('Message received:', msg);
    const newWaterLevel = parseInt(msg.data);
    if (!isNaN(newWaterLevel)) {
      setWaterLevel(newWaterLevel);
    }
  };

  const closedHandler = () => {
    console.log('Connection closed');
  };

  const errorHandler = (err) => {
    console.log('Connection error:', err);
  };

  const connectHandler = () => {
    console.log('Connected to broker');
    mqttClient.subscribeTo('frankhome/waterlevel');
  };

  mqttClient.connectClient(messageHandler, closedHandler, errorHandler, connectHandler)
    .catch((err) => console.error(err));

  return () => {
    mqttClient.disconnect();
  }
}, []);



getTodayDate = () =>{
  let today = new Date();
  let day = String(today.getDate()).padStart(2, '0');
  let monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
  ];
  let month = monthNames[today.getMonth()];
  let year = today.getFullYear();

  return `${day} ${month} ${year}`;
}

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.headerNav}>
          {/* <HandBugger route={navigation} /> */}
          <Text style={styles.homeText}>Poseidon Test</Text>
          {/* <BellIcon /> */}
        </View>
        {/* <View style={{
          height: GetHeight(50),
          backgroundColor: `#E7F7F4`,
          width: GetWidth(700),
          marginRight: 10
          
        }}>

        </View> */}


        <View>
          <Text style={styles.meter}>Water Level meter</Text>
          <View style={styles.waterContainer}>
            <View>
              <WaterTank waterLevelValue={waterLevel} amplitudeValue={2} numWavesValue={8} waveSpeed={3} />
            </View>
            <View style={styles.waterLevelInfo}>
              <Text
                style={{
                  color: '#12B293',
                  fontWeight: 'bold',
                  fontSize: GetFont(18),
                  fontStyle: 'normal',
                  textAlign: 'center',
                  fontFamily: 'Montserrat',
                }}>
                Water Level
              </Text>
              <Text
                style={{
                  fontSize: GetFont(54),
                  fontWeight: '700',
                  // borderBottomWidth: 1,
                  // borderBottomColor: '#12B293',
                  textAlign: 'center',
                  paddingBottom: GetHeight(16),
                }}>
                {waterLevel}%
              </Text>
              {/* <Text
                style={{
                  color: '#12B293',
                  marginTop: GetHeight(10),
                  fontSize: GetFont(15),
                  fontWeight: 'bold',
                }}>
                Estimated Finish Date
              </Text>
              <Text
                style={{
                  color: '#555555',
                  fontSize: GetFont(23),
                  fontWeight: 'bold',
                  lineHeight: GetFont(22),
                  marginTop: GetHeight(20),
                }}>
               {getTodayDate()}
              </Text> */}
            </View>
          </View>
        </View>

        {/* <View style={styles.getWaterNow}>
          <Text style={{fontSize: GetFont(25), fontWeight: 'bold', color: '#555555'}}>
            Get Water Now
          </Text>
          <ScrollView horizontal={true} style={styles.litreCon}>
            {waterLevelArray.map((level, key) => {
              return (
                <TouchableOpacity
                  key={key}
                  style={
                    active === level.litre
                      ? styles.activeStyleIcon
                      : styles.litre
                  }
                  onPress={() => {
                    setActive(level.litre);
                  }}>
                  <Text
                    style={
                      active === level.litre
                        ? styles.whiteTextColor
                        : styles.textColor
                    }>
                    {level.litre}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View> */}
        {/* <Button
          text="Order Water"
          marginTop={GetHeight(20)}
          action={() => {
            // handleVerification(data.email, data.userToken);
            // navigation.navigate('addDevices');
          }}
        /> */}
        {/* <Text
          style={{
            color: '#555555',
            fontSize: GetFont(15),
            fontWeight: '600',
            paddingTop: 10,
            paddingBottom: 10,
          }}>
          Statistics
        </Text> */}
        {/* <View style={styles.waterUsage}> */}
          {/* <ArrowRightIcon /> */}
          {/* <View style={styles.usageChartCon}>
            <Text
              style={{
                color: '#12B293',
                fontSize: GetFont(15),
                fontWeight: '600',
                marginTop: 10,
                // marginLeft: 20,
              }}>
              Water Usage
            </Text> */}
            {/* <ScrollView horizontal={true} style={styles.usageChartInnerCon}>
              {/* <VerticalBarGraph
                data={[45, 95, 30, 70, 85, 40, 30]}
                labels={['M', 'T', 'W', 'T', 'F', 'S', 'S']}
                width={Dimensions.get('window').width - 180}
                //   width={400}
                height={130}
                barRadius={10}
                barWidthPercentage={0.4}
                barColor="#12B293"
                baseConfig={{
                  hasXAxisLabels: false,
                  hasXAxisBackgroundLines: false,
                }}
                style={{
                  //   marginBottom: 10,
                  padding: 10,
                  //   paddingTop: 20,
                  //   borderRadius: 20,
                  //   backgroundColor: `#E7F7F4`,
                  //   width: Dimensions.get('window').width - 70,
                  //   width: '100%',
                  //   height: '100%',
                }}
              /> */}
              {/* <VerticalBarGraph
                data={[74, 35, 59, 40, 85, 80, 20]}
                labels={['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7']}
                width={Dimensions.get('window').width - 180}
                //   width={400}
                height={130}
                barRadius={10}
                barWidthPercentage={0.4}
                barColor="#12B293"
                baseConfig={{
                  hasXAxisLabels: false,
                  hasXAxisBackgroundLines: false,
                }}
                style={{
                  //   marginBottom: 10,
                  padding: 10,

                }}
              /> */}
              {/* <VerticalBarGraph
                data={[45, 95, 30, 70, 85, 40, 30, 53, 20, 70, 39, 10]}
                labels={[
                  'JA',
                  'FB',
                  'MA',
                  'AP',
                  'MY',
                  'JN',
                  'JL',
                  'AU',
                  'SP',
                  'OC',
                  'NV',
                  'DC',
                ]}
                width={Dimensions.get('window').width - 180}
                //   width={400}
                height={130}
                barRadius={5}
                barWidthPercentage={0.4}
                barColor="#12B293"
                baseConfig={{
                  hasXAxisLabels: false,
                  hasXAxisBackgroundLines: false,
                }}
                style={{
                  //   marginBottom: 10,
                  padding: 10,
                  //   paddingTop: 20,
                  //   borderRadius: 20,
                  //   backgroundColor: `#E7F7F4`,
                  //   width: Dimensions.get('window').width - 70,
                  //   width: '100%',
                  //   height: '100%',
                }}
              /> */}
            {/*</ScrollView> */}
          </View>
          {/* <ArrowLeftIcon /> */}
        {/* </View> */}
      {/* </View> */}
    </View>
  );
};

export default Poseidon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    display: 'flex',
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
  },
  headerNav: {
    display: 'flex',
    flexDirection: 'row',
    height: '10%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: "#12B293",
    // justifyContent: 'space-between',
    justifyContent: 'center'
  },
  homeText: {
    fontStyle: 'normal',
    fontSize: GetFont(30),
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  waterContainer: {
    display: 'flex',
// flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'space-around',
    justifyContent: 'center',
    marginTop: GetHeight(180)
  },
  waterLevelInfo: {
    width: GetWidth(185),
    height: GetHeight(232),
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: GetHeight(125),
    padding: 20,
    shadowColor: '#EEEEEE',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginLeft: GetWidth(120),
    elevation: 5,
    
  },
  meter: {
    fontWeight: '600',
    fontSize: GetFont(20),
    fontStyle: 'normal',
    lineHeight: GetFont(37),
    fontFamily: 'Montserrat',
    marginTop: GetHeight(50),
    marginLeft: GetWidth(50)
    // marginBottom: GetHeight(25),
  },
  getWaterNow: {
    width: '100%',
    height: GetHeight(170),
    borderRadius: 20,
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
    marginTop: GetHeight(20),
    padding: 25,
  },
  litre: {
    borderRadius: 30,
    borderWidth: 2,
    padding: 15,
    height: GetHeight(50),
    width: GetWidth(80),
    borderColor: '#12B293',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  litreCon: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: GetHeight(30),
    paddingBottom: 10,
  },
  activeStyleIcon: {
    backgroundColor: '#12B293',
    borderRadius: 30,
    borderWidth: 2,
    padding: 15,
    height: GetHeight(50),
    width: GetWidth(80),
    color: '#fff',
    borderColor: '#12B293',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: GetWidth(8),
  },
  textColor: {
    color: '#12B293',
    fontSize: GetFont(16),
    fontWeight: '600',
  },
  whiteTextColor: {
    color: '#fff',
    fontSize: GetFont(16),
    fontWeight: '600',
  },
  waterUsage: {
    width: '100%',
    height: GetHeight(180),
    backgroundColor: `#E7F7F4`,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  usageChartCon: {
    width: '80%',
    height: '95%',
  },
  usageChartInnerCon: {
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
