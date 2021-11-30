import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

const DateDetails = ({navigation}) => {
  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return date + '/' + month + '/' + year;
  };
  const getTime = () => {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();

    return hours + ':' + minutes;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>Date details</Text>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.h2}>DD/MM/YY: {getCurrentDate()}</Text>

          <Text style={styles.h2}>Time: {getTime()}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DateDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 10,
    width: '100%',
    height: 200,
  },
  h1: {
    fontSize: 28,
    padding: 40,
    fontWeight: 'bold',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  h2: {
    fontSize: 18,
    padding: 20,
    paddingLeft: 40,
    fontWeight: 'bold',
  },
  p: {
    fontSize: 14,
    paddingLeft: 40,
  },
});
