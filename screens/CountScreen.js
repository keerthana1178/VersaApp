import React from 'react';
import {Text, View, StyleSheet, Button, TextInput} from 'react-native';

import Trial from '../components/Trial';
import DownloadButton from '../components/DownloadButton';
function CountScreen(props) {
  return (
    <View style={{flex: 1, elevation: 0, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>InventoryDetails</Text>
      </View>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 15,
          fontSize: 30,
          fontWeight: 'bold',
        }}>
        SKU #: UGG-BB-PUR-06
      </Text>
      <View
        style={{
          backgroundColor: 'black',
          borderWidth: 1,
          marginHorizontal: 50,
        }}></View>
      <Trial
        pName="ProductName"
        title="Title"
        Pid="2395823"
        location="32B"
        SystemInventory="70"
      />

      <Text style={{fontWeight: 'bold', fontSize: 25, marginLeft: 20}}>
        Location
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.txt}>Aisle Number</Text>
        <TextInput style={styles.box}></TextInput>
        <Text style={styles.txt}>Rack Number</Text>
        <TextInput style={styles.box}></TextInput>
      </View>
      <View style={{flexDirection: 'row', marginVertical: 20}}>
        <Text style={styles.txt}>Shelf Number</Text>
        <TextInput style={styles.box1}></TextInput>
        <Button
          title="Scan Location"
          color="orange"
          style={{marginLeft: 20, borderRadius: 30}}></Button>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 30,
          marginHorizontal: 40,
        }}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 3,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Count
        </Text>
        <TextInput style={styles.box}></TextInput>
      </View>
      <DownloadButton title="Add Product"></DownloadButton>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    height: 250,
    elevation: 10,
  },
  headerText: {
    position: 'relative',
    //fontFamily: "Raleway",
    fontSize: 40,
    fontWeight: '700',
    top: 116,
    textAlign: 'center',
  },
  txt: {
    marginLeft: 20,
    marginRight: 3,
    fontSize: 18,
  },
  box: {
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 8,
    width: 45,
    height: 30,
    padding: 5,
    marginHorizontal: 0,
  },
  box1: {
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 8,
    width: 45,
    height: 30,
    padding: 5,
    marginRight: 20,
  },
});

export default CountScreen;
