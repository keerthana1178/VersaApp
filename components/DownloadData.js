import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
function DownloadData(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Downloaded at:</Text>
      <Text style={styles.text}>Date : {props.date}</Text>
      <Text style={styles.text}>Time: {props.time}</Text>
      <View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: 'white',
          marginTop: 7,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'left',
  },
});
export default DownloadData;
