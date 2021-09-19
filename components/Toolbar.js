import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Path, Circle} from 'react-native-svg';

const Toolbar = () => {
  return (
    <View style={styles.toolbarContainer}>

    </View>
  );
};

const styles = StyleSheet.create({
  toolbarContainer: {
    // position: 'relative',
    width: '100%',
    height: 85,
    backgroundColor: 'white',
    shadowColor: 'red',
    elevation: 100,
  },
  toolbarSubContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    paddingTop: 14,
  },
});

export default Toolbar;
