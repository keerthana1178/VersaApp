import {Database} from '@nozbe/watermelondb';
//Database integration-----------------------------------------
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from './schema';
import Post from './Post'; // ⬅️ You'll import your Models here

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  schema,
  // optional database name or file system path
  // dbName: 'myapp',
  // optional migrations
  // migrations,
  // synchronous mode only works on iOS. improves performance and reduces glitches in most cases, but also has some downsides - test with and without it
  //synchronous: true,
  erimentalUseJSI: true,
  // experimental JSI mode, a more advanced version of synchronous: true
  // experimentalUseJSI: true,
  // Optional, but you should implement this method:
  onSetUpError: error => {
    // Database failed to load -- offer the user to reload the app or log out
  },
});
import Product from './Products';
import Inventory from './Inventoy';

const database = new Database({
  adapter,
  modelClasses: [
    Product,
    Post,
    Inventory,
    // Post, // ⬅️ You'll add Models to Watermelon here
  ],
  actionsEnabled: true,
});

export default database;
