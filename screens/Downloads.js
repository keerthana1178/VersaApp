import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
//import Button from '../components/Button';
import {Dimensions} from 'react-native';
import DownloadButton from '../components/DownloadButton';
import DownloadData from '../components/DownloadData';
const DownloadScreen = ({navigation}) => {
  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return date + '-' + month + '-' + year;
  };
  const getCurrentTime = () => {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    return hours + ':' + minutes + ':' + seconds;
  };

  const [press, setPress] = useState(false);
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
        <DownloadData date={getCurrentDate()} time={getCurrentTime()} />
      )}
      <DownloadButton
        title="Download"
        onPress={() => setPress(!press)}></DownloadButton>
    </View>
  );
};
//position for button bottom nundi pedtunte ravatledhu
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
