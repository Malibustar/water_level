/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigation/index';
const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </>
  );
};

export default App;

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import MainNavigation from './src/navigation/index';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {createStackNavigator} from '@react-navigation/stack';
// import {View, Text, Button} from 'react-native';
// import HomeStack from './src/navigation/homeStack';

// const Drawer = createDrawerNavigator();
// // const HomeStack = createStackNavigator();
// const DetailStack = createStackNavigator();

// const HomeScreen = ({navigation}) => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to detail screen"
//         onPress={() => {
//           navigation.navigate('Detail');
//         }}
//       />
//     </View>
//   );
// };

// const DetailScreen = ({navigation}) => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Detail Screen</Text>
//       <Button
//         title="Go to home screen"
//         onPress={() => {
//           navigation.navigate('Home');
//         }}
//       />
//     </View>
//   );
// };

// const HomeScreenStack = ({navigation}) => {
//   return (
//     <HomeStack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: '*009387',
//         },
//         // headerTintColor: '#fff',
//         headerTitleStyle: 'bold',
//       }}>
//       <HomeStack.Screen name="Home" component={HomeScreen} />
//     </HomeStack.Navigator>
//   );
// };

// const DetailScreenStack = ({navigation}) => {
//   return (
//     <DetailStack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: '*009387',
//         },
//         // headerTintColor: '#fff',
//         headerTitleStyle: 'bold',
//       }}>
//       <DetailStack.Screen name="Detail" component={DetailScreen} />
//     </DetailStack.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <>
//       <NavigationContainer>
//         <MainNavigation />
//         {/* <Drawer.Navigator initialRouteName="Home">
//           <Drawer.Screen name="Home" component={HomeStack} />
//           <Drawer.Screen name="Detail" component={DetailScreenStack} />
//         </Drawer.Navigator> */}
//       </NavigationContainer>
//     </>
//   );
// };

// export default App;
