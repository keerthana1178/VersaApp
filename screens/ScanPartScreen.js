import React from 'react';
import {ScrollView, View, Text, TextInput, StyleSheet} from 'react-native';

import DownloadButton from '../components/DownloadButton';
import DownloadData from '../components/DownloadData';

function ScanPartScreen(props) {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={{flex: 1, elevation: 0, backgroundColor: 'white'}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Edit Details</Text>
        </View>
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', paddingTop: 20}}>
            <Text style={styles.txt}>Old Count</Text>
            <TextInput style={styles.box} color="black">
              50
            </TextInput>
          </View>
          <View style={{flexDirection: 'row', paddingVertical: 20}}>
            <Text style={styles.txt}>New Count</Text>
            <TextInput style={styles.box}></TextInput>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.txt}>Part Location</Text>
          <TextInput style={styles.box} color="black"></TextInput>
        </View>
        <View style={{paddingHorizontal: 50}}>
          <DownloadButton title="Scan Part Location"></DownloadButton>
          <DownloadButton title="View Part Details"></DownloadButton>
          <DownloadButton title="Edit Part Details"></DownloadButton>
          <DownloadButton title="Save Changes"></DownloadButton>
          <DownloadButton title="Scan Next Part"></DownloadButton>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
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
});
export default ScanPartScreen;
