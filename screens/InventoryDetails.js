/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Toolbar from '../components/Toolbar';
import Button from '../components/Button';
import {Dimensions} from 'react-native';

const InventoryDetails = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', elevation: 0}}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Inventory Details</Text>
        </View>
        <Text
          style={{
            padding: 50,
            textAlign: 'center',
            height: Dimensions.get('window').height - (85 + 210),
            backgroundColor: 'white',
          }}>
          Inventory details screen
        </Text>
        <Button
          top={Dimensions.get('window').height - 135}
          propsStyle={{left: '50%', transform: [{translateX: -(301 / 2)}]}}
          width={301}
          content="ADD PRODUCT"
        />
      </View>
      <Toolbar />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    height: 210,
    elevation: 10,
  },
  headerText: {
    position: 'relative',
    fontFamily: 'Raleway',
    fontSize: 40,
    fontWeight: '700',
    top: 106,
    textAlign: 'center',
  },
});

export default InventoryDetails;
