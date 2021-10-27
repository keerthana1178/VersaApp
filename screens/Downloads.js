/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
//import Button from '../components/Button';
import {Dimensions} from 'react-native';
import DownloadButton from '../components/DownloadButton';
import DownloadData from '../components/DownloadData';
import {getCurrentDate, getCurrentTime, getString} from '../util';
import { downloadProducts, getProductsDownloadTimestamp } from './InventoryDetails';

const DownloadScreen = ({navigation}) => {

  const [press, setPress] = useState(false);
  const [loading, setLoading] = useState(true);
  const [timestamp, setTimestamp] = useState('');

  if (loading) {
    getProductsDownloadTimestamp().then(ts => {
      setLoading(false);
      setTimestamp(ts);
    });
    return <View><Text>Initializing ...</Text></View>
  }

  function getDownloadDate() {
    // eslint-disable-next-line prettier/prettier
    return timestamp == null || timestamp.length == 0 ? '' : timestamp.split(' ')[0];
  }

  function getDownloadTime() {
    return timestamp == null || timestamp.length == 0 ? '' : timestamp.split(' ')[1];
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: 200,
          elevation: 10,
        }}>
        <Text style={styles.headerText}>Downloads</Text>
        <Text style={styles.subText}>Check your download history</Text>
      </View>

      {press && (
        <DownloadData date={getDownloadDate()} time={getDownloadTime()} />
      )}
      <DownloadButton
        title="Download"
        onPress={() => { 
          downloadProducts();
          setPress(!press);
        }}></DownloadButton>
    </View>
  );
};


export default DownloadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF1E6',
  },
  header: {
    backgroundColor: 'white',
    paddingTop: 50,
    elevation: 10,
  },
  headerText: {
    backgroundColor: 'white',
    position: 'relative',
    fontFamily: 'Raleway',
    fontSize: 40,
    fontWeight: '700',
    top: 66,
    textAlign: 'center',
  },
  subText: {
    backgroundColor: 'white',
    position: 'relative',
    fontFamily: 'Raleway',
    fontSize: 18,
    color: '#909090',
    fontWeight: '300',
    top: 66,
    textAlign: 'center',
  },
});
