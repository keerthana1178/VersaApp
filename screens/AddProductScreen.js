import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import DownloadButton from '../components/DownloadButton';
function AddProductScreen(props) {
  return (
    <View style={{flex: 1, elevation: 0, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add Product</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.txt}>Scan with Barcode Reader</Text>
        <Image source={require('../assets/qr.png')} style={{height: 75}} />
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
    fontSize: 25,
    fontWeight: 'bold',
    margin: 20,
  },
});
export default AddProductScreen;
