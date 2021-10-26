import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {color} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

function Failure(props) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Status</Text>
      </View>
      <View style={{alignItems: 'center', padding: 50}}>
        <Icon name="close-circle" size={80} color="#ff9200"></Icon>
        <Text style={{marginTop: 40, fontSize: 25, fontWeight: 'bold'}}>
          Failed
        </Text>
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: 'black',
            marginVertical: 50,
          }}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ff9200'}}>
          There was an error in scanning the product
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginTop: 20,
            fontWeight: 'bold',
            color: '#ff9200',
          }}>
          Please click on the scan icon and try again.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'white',
    height: 200,
    elevation: 10,
  },
  headerText: {
    position: 'relative',
    fontFamily: 'Raleway',
    fontSize: 40,
    fontWeight: '700',
    top: 76,
    textAlign: 'center',
  },
});

export default Failure;
