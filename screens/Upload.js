// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const UploadScreen = ({navigation}) => {
//     return (
//       <View style={styles.container}>
//         <Text>Upload Screen</Text>
//       </View>
//     );
// };

// export default UploadScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
// });

/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TextInput,
  ScrollView,
} from 'react-native';
import {filter} from 'lodash';
import Toolbar from '../components/Toolbar';
import Button from '../components/Button';
import {Dimensions} from 'react-native';
import Trial from '../components/Trial';
import {set} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

const CompleteData = [
  {
    id: 1,
    ProductName: 'first',
    title: 'SKU #: UGG-BB-PUR-06',
    Pid: '3259810',
    location: '3259810',
    SystemInventory: '50',
  },
  {
    id: 3,
    ProductName: 'second',
    title: 'SKU #: UGG-BB-PUR-06',
    Pid: '3259810',
    location: '3259810',
    SystemInventory: '50',
  },
  {
    id: 2,
    ProductName: 'third',
    title: 'SKU #: UGG-BB-PUR-89',
    Pid: '3259823780',
    location: '32598234798210',
    SystemInventory: '99',
  },
  {
    id: 4,
    ProductName: 'tthird',
    title: 'SKU #: UGG-BB-PUR-89',
    Pid: '3259823780',
    location: '32598234798210',
    SystemInventory: '99',
  },
  {
    id: 5,
    ProductName: 'ffirst',
    title: 'SKU #: UGG-BB-PUR-89',
    Pid: '3259823780',
    location: '32598234798210',
    SystemInventory: '99',
  },
  {
    id: 6,
    ProductName: 'sxjhnam',
    title: 'SKU #: UGG-BB-PUR-89',
    Pid: '3259823780',
    location: '32598234798210',
    SystemInventory: '99',
  },
];

const UploadScreen = () => {
  const [data, setData] = useState(CompleteData);
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState(CompleteData);
  const [clickable, setClickable] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    console.log(formattedQuery);
    var filteredData = fullData;
    filteredData = fullData.filter(function (item) {
      return item.ProductName.includes(formattedQuery);
    });
    setData(filteredData);
    setQuery(text);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FAEEE0', elevation: 0}}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Inventory Details</Text>
        </View>

        <FlatList
          //nestedScrollEnabled
          // ListHeaderComponent={renderHeader}
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Trial
              pName={item.ProductName}
              title={item.title}
              Pid={item.Pid}
              location={item.location}
              SystemInventory={item.SystemInventory}
            />
          )}></FlatList>

        <Button
          top={Dimensions.get('window').height - 155}
          propsStyle={{left: '50%', transform: [{translateX: -(301 / 2)}]}}
          width={281}
          content="Upload"
        />
      </View>
      <Toolbar />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    height: 150,
    elevation: 10,
  },
  headerText: {
    position: 'relative',
    fontFamily: 'Raleway',
    fontSize: 40,
    fontWeight: '700',
    top: 46,
    textAlign: 'center',
  },
});

export default UploadScreen;
