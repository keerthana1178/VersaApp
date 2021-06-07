import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import DBTestProduct from './DBTestProduct';
import CameraScanner from './CameraScanner';
import InventoryDetails from './InventoryDetails';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <RootStack.Screen name="DBTestProduct" component={DBTestProduct} />
    <RootStack.Screen name="CameraScanner" component={CameraScanner} />
    <RootStack.Screen name="InventoryDetails" component={InventoryDetails} />
  </RootStack.Navigator>
);

export default RootStackScreen;
