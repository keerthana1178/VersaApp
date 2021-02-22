import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Camera from './Camera';

const App = () => {
  return (
    <View style={styles.container}>
      <Camera />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
