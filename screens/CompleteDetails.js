import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
function usingprops(props) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={{fontWeight: 'bold', fontSize: 45}}>Product Details</Text>
      </View>
      <Text style={styles.title}>{props.title} </Text>
      <View style={styles.frst}>
        <View>
          <Text style={{color: '#424347'}}>Product Name</Text>
          <Text>
            ProductId : <Text style={{color: 'orange'}}>{props.Pid}</Text>
          </Text>
          <Text>
            Location : <Text style={{color: 'orange'}}>{props.location}</Text>
          </Text>
          <Text>
            System Inventory :{' '}
            <Text style={{color: 'orange'}}> {props.SystemInventory}</Text>
          </Text>
        </View>
        <Image style={styles.img} />
      </View>
      <Text style={{paddingLeft: 20}}>
        Updated Inventory Inventory :{' '}
        <Text style={{color: 'orange'}}> {props.UpdatedInventory}</Text>
      </Text>
      <Text style={{paddingLeft: 20}}>
        Type Of Inventory :{' '}
        <Text style={{color: 'orange'}}> {props.TypeOfInventory}</Text>
      </Text>
      <Text style={{paddingLeft: 20}}>
        Batch Quantity :{' '}
        <Text style={{color: 'orange'}}> {props.TypeOfInventory}</Text>
      </Text>
      <Text style={{color: '#979797', fontWeight: 'bold', fontSize: 20}}>
        {' '}
        DIMENSIONS
      </Text>
      <Text style={{paddingLeft: 20}}>
        Length : <Text style={{color: 'orange'}}> {props.Length}</Text>
      </Text>
      <Text style={{paddingLeft: 20}}>
        Height : <Text style={{color: 'orange'}}> {props.Height}</Text>
      </Text>
      <Text style={{paddingLeft: 20}}>
        Width : <Text style={{color: 'orange'}}> {props.Width}</Text>
      </Text>

      <Text style={{paddingLeft: 20}}>
        Weight : <Text style={{color: 'orange'}}> {props.Weight}</Text>
      </Text>
    </View>
  );
}

export default usingprops;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    padding: 20,
  },
  header: {
    height: 210,
    width: 400,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frst: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  img: {height: 100, width: 100, backgroundColor: '#BBBBBB', marginLeft: 25},
});
