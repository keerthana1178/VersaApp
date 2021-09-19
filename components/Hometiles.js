import React from 'react';
import {View, Text, Button, StyleSheet, StatusBar,Image,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { red100 } from 'react-native-paper/lib/typescript/styles/colors';
import {checklist} from '../assets/checklist.png'

const HomeTiles = (props,{navigation}) => {
  
  
  return (
    <View style={styles.tileMain}>
    <TouchableOpacity onPress={props.onclick}>
    <View style={styles.container}>
    <Image
      source={props.logo}
      resizeMode="contain"
      style={styles.img}
    />
    </View>
    </TouchableOpacity>
    <Text style={{fontSize:18}}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        width:125,
        height:125,
        backgroundColor:'#fff',
        borderWidth:4,
        borderColor:'#F69422',
        borderRadius:10,
        margin:20,
        marginRight:10,
        marginBottom:15,
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        width:50,
        height:50
    },
    tileMain:{
        alignItems:'center',
        justifyContent:'center'
    }
})
export default HomeTiles;