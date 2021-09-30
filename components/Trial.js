//import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
// import { SearchBar } from '@react-native-elements';
//import ProductDetails from './productDetails';

export default function App(props) {
  console.log('started');

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => alert('pressed')}>
      <View style={styles.frst}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>{props.title} </Text>
          <Text style={{color: '#424347'}}>{props.pName}</Text>
          <Text>
            ProductId : <Text style={{color: 'orange'}}>{props.Pid}</Text>
          </Text>
          <Text>
            Location : <Text style={{color: 'orange'}}>{props.location}</Text>
          </Text>
          <Text>
            System Inventory :{' '}
            <Text style={{color: 'orange'}}> {props.SystemInventory}</Text>
          </Text>
        </View>
        <Image style={styles.img} />
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  frst: {
    flexDirection: 'row',
    padding: 20,
    paddingLeft: 20,
    alignItems: 'center',
    borderColor: 'white',
    borderBottomWidth: 2,
  },
  img: {height: 100, width: 100, backgroundColor: '#BBBBBB', marginLeft: 25},
});
