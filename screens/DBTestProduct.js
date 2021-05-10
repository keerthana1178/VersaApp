import React, {useState, useEffect} from 'react';
import {LoremIpsum} from 'lorem-ipsum';
import database from '../model/database';
import {View, Text, ScrollView, Button} from 'react-native';
import {ProductCard} from '../components/ProductCard';
import axios from 'axios';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const productsCollection = database.get('products');
const inventoryCollection = database.get('inventory');

const DBTestProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log('use effect ran', products);
    const func = async () => {
      console.log('entered use effect');
      setProducts(await productsCollection.query().fetch());
    };
    func();
    console.log('finished use effect');
    return () => {
      console.log('unmounting');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View>
      <Text>DB Test Product collection</Text>
      <ScrollView>
        {products.map((v, i) => {
          return <ProductCard product={v} key={i} />;
        })}
      </ScrollView>
      <Button
        onPress={async () => {
          await database.action(async () => {
            const newProduct = await productsCollection.create(product => {
              product.productId = Math.floor(Math.random() * 1000);
              product.name = lorem.generateWords(1);
              product.practicalName = lorem.generateWords(2);
              product.productCategory = 'FMCG';
              product.ean = 'sfddshflsajdf';
              product.measurementUnitName = 'EA';
              product.lastUpdatedOnVersa = Date.now();
            });
            console.log(newProduct);
          });
          setProducts(await productsCollection.query().fetch());
        }}
        title="Add a new Product"
      />
      <Button
        onPress={async () => {
          await database
            .action(async () => {
              console.log(inventoryCollection);
              const newInventory = await inventoryCollection
                .create(inventory => {
                  inventory.quantityOnHand = Math.floor(Math.random() * 100);
                  inventory.facilityCode = 'HAM';
                  inventory.measurementUnitName = 'EA';
                  inventory.inventoryUpdatedAt = Date.now();
                  inventory.product.id = 's4tuqueskuopm2uc';
                  // inventory.product.product_id = 431;
                })
                .then(() => {
                  console.log('created');
                })
                .catch(err => {
                  console.log('create error', err);
                });
              console.log(newInventory);
            })
            .catch(err => {
              console.log('error', err);
            });
          setProducts(await productsCollection.query().fetch());
          console.log(await inventoryCollection.query().fetch());
        }}
        title="Add inventory to a product"
      />
      <Button
        onPress={() => {
          console.log('starting download');
          async function getData() {
            try {
              const response = await axios.get(
                'https://www10.versaccounts.com/v1/product.json',
                {
                  headers: {
                    VERSACCOUNTS_AUTHORIZATION:
                      '378f9f3ab9c9c2b2252f7a2a5deb430c3db42151',
                  },
                },
              );
              console.log(response.data[0].product.id);
            } catch (error) {
              console.error(error);
            }
          }
          getData();
        }}
        title="Download Records"
      />
      <Button
        onPress={() => {
          productsCollection.createBatchProducts();
        }}
        title="check"
      />
    </View>
  );
};

export default DBTestProduct;
