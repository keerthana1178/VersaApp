import React from 'react';
import { View, Text, Button, StyleSheet,SafeAreaView,ScrollView,TouchableOpacity, Alert } from 'react-native';
import {useTheme} from '@react-navigation/native';


const DateDetails = ({navigation}) => {
    return (
      
      <SafeAreaView style={styles.container}>
      
        <View style={styles.header}>
          <Text style={styles.h1}>Date details</Text>
        </View>
        <ScrollView>
        <View>
        <TouchableOpacity>
        <Text style={styles.h2}>MM/DD/YY:  HH:MM</Text>  
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{Alert.alert("Clear Data","Do you want to erase all the data?")}}>
        <Text style={styles.h2}>Time: 9:00</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.h2}>TimeZone: Portland</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>  
      </SafeAreaView>
      
    );
};

export default DateDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  header:{
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
  p:{
    fontSize:14,
    paddingLeft:40,
  }
});
