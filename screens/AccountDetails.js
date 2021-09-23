import React from 'react';
import { View, Text, Button, StyleSheet,SafeAreaView,ScrollView,TouchableOpacity } from 'react-native';
import {useTheme} from '@react-navigation/native';


const AccountDetails = ({navigation}) => {
    return (
      
      <SafeAreaView style={styles.container}>
      
        <View style={styles.header}>
          <Text style={styles.h1}>Account details</Text>
        </View>
        <ScrollView>
        <View>
        <TouchableOpacity onpress={()=>{navigation.push("CameraScanner")}}>
        <Text style={styles.h2}>Company Name:</Text>  
        <Text style={styles.p}>XXXXXXXXX</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.h2}>Email:</Text>
        <Text style={styles.p}>XXXXXXXXXX@gmail.com</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.h2}>Contact No.</Text>
        <Text style={styles.p}>+10-12XXXXXX</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.h2}>Facility Code:</Text>
        <Text style={styles.p}>XXXX</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.h2}>Address:</Text>
        <Text style={styles.p}>XXXXXXXXXX road XXXXXXXXXX street XXXXXXXXXX street XXXXXXXXXX street</Text>
        </TouchableOpacity>        
        </View>
        </ScrollView>  
      </SafeAreaView>
      
    );
};

export default AccountDetails;

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
