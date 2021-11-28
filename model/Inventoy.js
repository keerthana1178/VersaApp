// model/Post.js
import {Model} from '@nozbe/watermelondb';
import {field, relation} from '@nozbe/watermelondb/decorators';
import date from '@nozbe/watermelondb/decorators/date';

export default class Inventory extends Model {
  static table = 'inventory';
  static associations = {
    products: {type: 'belongs_to', key: 'product_id'},
  };

  @field('quantity_on_hand') quantityOnHand;
  @field('facility_code') facilityCode;
  @field('measurement_unit_name') measurementUnitName;
  @date('inventory_updated_at') inventoryUpdatedAt;
  @relation('products', 'product_id') product;
}

// {name: 'quantity_on_hand', type: 'number'},
// {name: 'measurement_unit_name', type: 'string'},
// {name: 'facility_code', type: 'string'},
// {name: 'inventory_updated_at', type: 'number'},
