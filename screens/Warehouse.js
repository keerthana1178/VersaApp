import React from 'react';
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';  
import HomeTiles from '../components/Hometiles';


import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DownloadScreen from './Downloads';
import UploadScreen from './Upload';
const HomeStack = createStackNavigator();


const Warehouse = ({navigation}) => {
  const {colors} = useTheme();
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} backgroundColor="#ED9121"/>
      <View style={[styles.container,styles.pad]}>
      <HomeTiles
        logo={require("../assets/download.png")}
        name="Download" 
        onclick={() => navigation.push('Downloads')}
      />
      <HomeTiles
        logo={require("../assets/upload.png")}
        name="upload" 
        onclick={() => navigation.push('Uploads')}
      />    
      </View>  
    </View>
  );
};

export default Warehouse;


const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F69422',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="warehouse"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#F69422"
              onPress={() => navigation.openDrawer()}></Icon.Button>
          ),
        }}
      />
      <HomeStack.Screen
        name='Downloads'
        component={DownloadScreen}
      />
      <HomeStack.Screen
        name='Uploads'
        component={UploadScreen}
      />
    </HomeStack.Navigator>
  );
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
    justifyContent:'center'
  },
  pad:{
    marginTop:'10%'
  }
});
