import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

function AppButton({title, onPress, onclick}) {
  return (
    <TouchableOpacity
      style={{padding: 20}}
      style={[styles.button, {backgroundColor: '#ff9200'}]}
      onPress={onclick}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    //position: 'absolute',
    //top: 600,
    //bottom: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    margin: 5,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default AppButton;
