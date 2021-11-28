import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import DownloadButton from '../components/DownloadButton';
function ScanLocationScreen(props) {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          elevation: 0,
          backgroundColor: 'white',
        }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Location Details</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 18, paddingLeft: 20, paddingTop: 10}}>
          Location :
        </Text>
        <TextInput style={styles.box1}>3259810</TextInput>
      </View>
      <Text style={{padding: 20, fontSize: 18}}>
        List Of Parts at this location :
      </Text>
      <Text style={{paddingLeft: 20, paddingBottom: 10, fontSize: 15}}>
        {' '}
        1. SKU #: UGG-BB-PUR-06
      </Text>
      <Text style={{paddingLeft: 20, paddingBottom: 10, fontSize: 15}}>
        {' '}
        2. SKU #: UGG-BB-PUR-28
      </Text>
      <Text style={{paddingLeft: 20, paddingBottom: 10, fontSize: 15}}>
        {' '}
        3. SKU #: UGG-BB-PUR-95
      </Text>
      <Text style={{paddingLeft: 20, fontSize: 15, paddingBottom: 10}}>
        {' '}
        4. SKU #: UGG-BB-PUR-236
      </Text>
      <Text style={{paddingLeft: 20, fontSize: 15, paddingBottom: 10}}>
        {' '}
        5. SKU #: UGG-BB-PUR-364
      </Text>
      <Text style={{paddingLeft: 20, fontSize: 15, paddingBottom: 10}}>
        {' '}
        6. SKU #: UGG-BB-PUR-380
      </Text>
      <Text style={{paddingLeft: 20, fontSize: 15, paddingBottom: 10}}>
        {' '}
        7. SKU #: UGG-BB-PUR-504
      </Text>
      <View style={{paddingHorizontal: 39}}>
        <DownloadButton title="Scan Location" />
        <DownloadButton title="Back" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    height: 180,
    elevation: 10,
  },
  headerText: {
    position: 'relative',
    //fontFamily: "Raleway",
    fontSize: 40,
    fontWeight: '700',
    top: 76,
    textAlign: 'center',
  },
  box1: {
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 8,
    width: 110,
    height: 30,
    padding: 5,
    margin: 10,
    color: 'black',
  },
});

export default ScanLocationScreen;
