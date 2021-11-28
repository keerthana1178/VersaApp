import React from 'react';
import DownloadButton from '../components/DownloadButton';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';
import {useTheme} from '@react-navigation/native';
function InventoryCountScreen({navigation}) {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>InventoryCount</Text>
      </View>

      <View style={{margin: 40, paddingTop: 100}}>
        <DownloadButton
          title="Scan Part"
          onclick={() => navigation.navigate('Scanner')}
        />
        <DownloadButton
          title="Scan Location"
          onclick={() => navigation.navigate('Scanner')}
        />
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
});
export default InventoryCountScreen;
