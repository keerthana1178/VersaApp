import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import DownloadButton from '../components/DownloadButton';
import DownloadData from '../components/DownloadData';
function PartDetailsScreen(props) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{elevation: 0, backgroundColor: 'white'}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Edit Details</Text>
        </View>
      </View>
      <ScrollView>
        <Text style={styles.title}>SKU #: UGG-BB-PUR-06</Text>
        <Text style={{fontSize: 18, paddingLeft: 20}}>Product Name</Text>
        <Text style={{fontSize: 18, paddingLeft: 20}}>
          Product ID : <Text style={{color: 'orange'}}>3259810</Text>
        </Text>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          <Text style={styles.txt}>Location</Text>
          <TextInput style={styles.box1}>3259810</TextInput>
        </View>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          <Text style={styles.txt}>System Inventory</Text>
          <TextInput style={styles.box}>50</TextInput>
        </View>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          <Text style={styles.txt}>Type Of Inventory</Text>
          <TextInput style={styles.box1}>Finished Goods</TextInput>
        </View>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          <Text style={styles.txt}>Batch Quantity</Text>
          <TextInput style={styles.box}>100</TextInput>
        </View>

        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          <Text style={styles.txt}>Length</Text>
          <TextInput style={styles.box}>90</TextInput>
        </View>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          <Text style={styles.txt}>Height</Text>
          <TextInput style={styles.box}>90</TextInput>
        </View>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          <Text style={styles.txt}>Width</Text>
          <TextInput style={styles.box}>90</TextInput>
        </View>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          <Text style={styles.txt}>Weight</Text>
          <TextInput style={styles.box}>90</TextInput>
        </View>
        <DownloadButton title="Save" />
      </ScrollView>
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
    color: 'black',
  },
  box1: {
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 8,
    width: 110,
    height: 30,
    padding: 5,
    marginHorizontal: 0,
    color: 'black',
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    padding: 20,
  },
});
export default PartDetailsScreen;
