import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import HomeTiles from '../components/Hometiles';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DownloadScreen from './Downloads';
import UploadScreen from './Upload';
import {log} from 'react-native-reanimated';
const HomeStack = createStackNavigator();

const Warehouse = ({navigation}) => {
  const {colors} = useTheme();
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor="#ED9121"
      />
      <View style={[styles.container, styles.pad]}>
        <HomeTiles
          logo={require('../assets/download.png')}
          name="Download"
          onclick={() => {
            navigation.navigate('Downloads');
          }}
        />
        <HomeTiles
          logo={require('../assets/upload.png')}
          name="Upload"
          onclick={() => navigation.navigate('Uploads')}
        />
      </View>
    </View>
  );
};

export default Warehouse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pad: {
    marginTop: '10%',
  },
});
