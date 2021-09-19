import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UploadScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Upload Screen</Text>
      </View>
    );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
