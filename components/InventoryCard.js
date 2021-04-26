import React from 'react';
import {View, Text} from 'react-native';

export const InventoryCard = ({inventory}) => {
  return (
    <View>
      {/* {inventoryList.map((v, i) => {
        return <Text>{v.id}</Text>;
      })} */}
      <Text>Record ID: {inventory.id}</Text>
      <Text>Facility Code: {inventory.facilityCode}</Text>
      <Text>Quantity On Hand: {inventory.quantityOnHand}</Text>
      <Text>
        Inventory Record Last Updated On :{' '}
        {inventory.inventoryUpdatedAt.toString()}
      </Text>
      <Text> </Text>
    </View>
  );
};
