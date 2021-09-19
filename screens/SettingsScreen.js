import React from 'react';
import { View, Text, Button, StyleSheet,SafeAreaView,ScrollView } from 'react-native';

const SettingsScreen = ({navigation}) => {
    return (
      
      <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.h1}>Settings</Text>
        </View>
        <Text style={styles.h2}>Account Details</Text>
        <Text style={styles.h2}>Date & Time</Text>
        <Text style={styles.h2}>Clear All Data</Text>
        <Text style={styles.h2}>Help</Text>
        
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
