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
import CompleteDetails from './CompleteDetails';
//import axios from 'axios';
import {
  axiosInstance,
  getString,
  setString,
  getCurrentDate,
  getCurrentTime,
} from '../util';

/*
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
*/

const allProductsKey = 'allProducts';
const productsTimestampKey = 'productsDownloadTime';
// const [press, setPress] = useState(false);
export function downloadProducts() {
  axiosInstance
    .get('/product.json')
    .then(function (rsp) {
      var products = rsp.data.map(p => ({
        ProductName: p.product.name,
        title: p.product.practical_name,
        Pid: p.product.id,
        id: p.product.id,
        SystemInventory:
          p.inventory_items == null
            ? 0
            : p.inventory_items.reduce(
                (pq, item) => pq + item.quantity_on_hand,
                0,
              ),
      }));
      console.log(products);
      setString(allProductsKey, JSON.stringify(products));
      const timestamp = getCurrentDate() + ' ' + getCurrentTime();
      setString(productsTimestampKey, timestamp);
      console.log('product count: ' + products.length);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function getProductsDownloadTimestamp() {
  return await getString(productsTimestampKey);
}

async function getAllProducts() {
  const productsStr = await getString(allProductsKey);
  if (!productsStr) {
    downloadProducts();
    return [];
  }
  return JSON.parse(productsStr);
}

const InventoryDetails = () => {
  const [loading, setLoading] = useState(true);
  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [clickable, setClickable] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [press, setPress] = useState(false);
  if (loading) {
    getAllProducts().then(products => {
      setLoading(false);
      setFullData(products);
      setData(products);
    });
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );
  }

  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    var filteredData = fullData;
    filteredData = fullData.filter(function (item) {
      //return item.ProductName.includes(formattedQuery);
      const target = item.title ? item.title : item.ProductName;
      return target != null && target.toLowerCase().includes(formattedQuery);
    });
    setData(filteredData);
    setQuery(text);
  };

  function renderHeader() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 5,
          paddingLeft: 15,
          marginVertical: 10,
          borderRadius: 20,
          flexDirection: 'row',
          alignItems: 'center',
          //justifyContent: 'center',
        }}>
        <Icon name="search-outline" size={25}></Icon>
        <TextInput
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          onPressIn={() => {
            setClickable(!clickable);
          }}
          autoFocus={clickable}
          placeholder="Search"
          style={{
            backgroundColor: '#fff',
            paddingHorizontal: 20,
            fontSize: 15,
            flex: 1,
          }}></TextInput>
        <View style={{right: 10}}>
          <Icon name="funnel-outline" size={25}></Icon>
        </View>
      </View>
    );
  }
  //const [press, setPress] = useState(false);
  return !press ? (
    <View style={{flex: 1, backgroundColor: '#FAEEE0', elevation: 0}}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Inventory Details</Text>
        </View>

        <FlatList
          //nestedScrollEnabled
          ListHeaderComponent={renderHeader}
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Trial
              pName={item.ProductName}
              title={item.title}
              Pid={item.Pid}
              location={item.location}
              SystemInventory={item.SystemInventory}
              onPress={() => setPress(true)}
              //onPress={() => console.log('working')}
            />
          )}
          refreshing={refreshing}
          onRefresh={() => {
            setData(fullData);
          }}></FlatList>

        {/* <Button
          top={Dimensions.get('window').height - 155}
          propsStyle={{left: '50%', transform: [{translateX: -(301 / 2)}]}}
          width={301}
          content="ADD PRODUCT"
        /> */}
      </View>
      <Toolbar />
    </View>
  ) : (
    <CompleteDetails
      title="SKU #: UGG-BB-PUR-06"
      Pid="3259810"
      location="3259810"
      SystemInventory="50"
      UpdatedInventory="70"
      TypeOfInventory="Finished Goods"
      BatchQty="20"
      Length="90"
      Width="90"
      Height="90"
      Weight="90"
    />
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

export default InventoryDetails;
