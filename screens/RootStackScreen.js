import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import DBTestProduct from './DBTestProduct';
import CameraScanner from './CameraScanner';
import InventoryDetails from './InventoryDetails';
import SettingsScreen from './SettingsScreen';
import DownloadScreen from './Downloads';
import UploadScreen from './Upload';
import Warehouse from './Warehouse';
import AccountDetails from './AccountDetails';
import DateDetails from './DateDetails';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <RootStack.Screen name="DBTestProduct" component={DBTestProduct} />
    <RootStack.Screen name="CameraScanner" component={CameraScanner} />
    <RootStack.Screen name="InventoryDetails" component={InventoryDetails} />
    <RootStack.Screen name="SettingsScreen" component={SettingsScreen} />
    <RootStack.Screen name="DownloadScreen" component={DownloadScreen} />
    <RootStack.Screen name="UploadScreen" component={UploadScreen} />
    <RootStack.Screen name="Warehouse" component={Warehouse} />
    <RootStack.Screen name="AccountDetails" component={AccountDetails} />
    <RootStack.Screen name="DateDetails" component={DateDetails} />
  </RootStack.Navigator>
);

export default RootStackScreen;
