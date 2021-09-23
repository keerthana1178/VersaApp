import React from 'react';

import { View, Text, Button, StyleSheet,SafeAreaView,ScrollView,TouchableOpacity,Alert } from 'react-native';
import {useTheme} from '@react-navigation/native';


const SettingsScreen = ({navigation}) => {
    const {colors} = useTheme();
    const theme = useTheme();
    return (
      
      <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.h1}>Settings</Text>
        </View>
        <TouchableOpacity onPress={()=>{navigation.push('Accounts')}}>
        <Text style={styles.h2}>Account Details</Text>  
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.push('Date')}}>
        <Text style={styles.h2}>Date & Time</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{Alert.alert("Clear Data","Do you want to erase all the data?",
        [
          {text:"yes"},
          {text:"No"},
        ])
        }}>
        <Text style={styles.h2}>Clear All Data</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.h2}>Help</Text>
        </TouchableOpacity>
        </ScrollView>  
      </SafeAreaView>
      
    );
};

export default SettingsScreen;




const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  header:{
    flex:1,
    alignContent:'center',
    justifyContent:'center',
    backgroundColor:'white',
    elevation:10,
    width:'100%',
    height:200
  },
  h1:{
    fontSize:28,
    padding:40,
    fontWeight:'bold',
    textDecorationStyle:'solid',
    textDecorationLine:'underline',
  },
  h2:{
    fontSize:18,
    padding:20,
    paddingLeft:40,
    fontWeight:'bold'
  },
});
