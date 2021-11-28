import React, {useState, useEffect} from 'react';
import {Button, View, Text} from 'react-native';
import {InventoryCard} from './InventoryCard';
// import database from '../model/database';

// const inventoryCollection = database.get('inventory');

// const func2 = async () => {
//   const alpha = await inventoryCollection.query().fetch();
//   console.log('func2', alpha);
//   alpha.map(async (v, i) => {
//     const zeta = await v.product;
//     console.log('func2productid\n', v.product.id, zeta);
//   });
// };

const func = async product => {
  const gamma = await product.inventory.fetch();
  console.log('fetch child list', gamma);
  gamma.map(async (v, i) => {
    console.log(v.id, v.facilityCode, v.measurementUnitName);
  });
  return gamma;
};

export const ProductCard = ({product}) => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    const funct = async () => {
      const gamma = await product.inventory.fetch();
      console.log('Product card Use Effect', gamma);
      setInventory(gamma);
    };
    funct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View>
      <Text>
        Product ID: {product.id}, {product.productId}
      </Text>
      <Text>Product Name: {product.name}</Text>
      <Text>Product practical name: {product.practicalName}</Text>
      <Text>Product measurement unit name: {product.measurementUnitName}</Text>
      <Text>
        Product details last updated on versa:{' '}
        {product.lastUpdatedOnVersa.toString()}
      </Text>
      <Text>{product.inventory.toString()}</Text>
      <Text> </Text>
      <Text>Inventory Details</Text>
      {inventory.map((v, i) => {
        return <InventoryCard inventory={v} key={i} />;
      })}
      {/* <InventoryCard inventoryList={inventory} /> */}
      <Button
        onPress={async () => {
          await func(product);

          // await func2();
        }}
        title="Fetch"
      />
      {/* {product.inventory.map((v, i) => {
        console.log(v);
      })} */}
    </View>
  );
};
