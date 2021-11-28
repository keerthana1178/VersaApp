import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

import Trial from '../components/Trial';
import DownloadButton from '../components/DownloadButton';
import SuccesScreen from './SuccessScreen';

function CountScreen(props) {
  const [press, setPress] = useState(false);
  const [kb, setkb] = useState(false);
  return !press ? (
    <ScrollView>
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
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.txt}>Aisle Number</Text>
            <TextInput
              onPressIn={() => setkb(!kb)}
              style={styles.box}></TextInput>
            <Text style={styles.txt}>Rack Number</Text>
            <TextInput
              onPressIn={() => setkb(!kb)}
              style={styles.box}></TextInput>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 20}}>
            <Text style={styles.txt}>Shelf Number</Text>
            <TextInput
              onPressIn={() => setkb(!kb)}
              style={styles.box1}></TextInput>
            <Button
              title="Scan Location"
              color="orange"
              style={{marginLeft: 20, borderRadius: 30}}></Button>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 12,
              marginHorizontal: 40,
            }}>
            <Text
              style={{
                marginLeft: 50,
                marginRight: 3,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Count
            </Text>
            <TextInput
              onPressIn={() => setkb(!kb)}
              style={styles.box}></TextInput>
          </View>
        </KeyboardAvoidingView>
        {/* {!kb && (
        <DownloadButton
          title="Add Product"
          onPress={() => setPress(true)}></DownloadButton>
      )} */}
        <DownloadButton
          title="Add Product"
          onPress={() => setPress(true)}></DownloadButton>
      </View>
    </ScrollView>
  ) : (
    <SuccesScreen />
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
    width: 45,
    height: 30,
    padding: 5,
    marginRight: 20,
    color: 'black',
  },
});

export default CountScreen;
