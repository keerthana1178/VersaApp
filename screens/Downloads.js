import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DownloadScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Download Screen</Text>
        <Text>Need to work on it.</Text>
      </View>
    );
};

export default DownloadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
