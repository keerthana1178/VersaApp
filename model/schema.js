import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    // tableSchemas go here...
    tableSchema({
      name: 'posts',
      columns: [
        {name: 'title', type: 'string'},
        {name: 'subtitle', type: 'string', isOptional: true},
        {name: 'body', type: 'string'},
        {name: 'is_pinned', type: 'boolean'},
      ],
    }),
    // tableSchema({
    //   name: 'comments',
    //   columns: [
    //     {name: 'body', type: 'string'},
    //     {name: 'post_id', type: 'string', isIndexed: true},
    //   ],
    // }),
    tableSchema({
      name: 'products',
      columns: [
        {name: 'product_id', type: 'number', isIndexed: true},
        {name: 'name', type: 'string', isOptional: true},
        {name: 'practical_name', type: 'string', isOptional: true},
        {name: 'product_category', type: 'string', isOptional: true},
        {name: 'measurement_unit_name', type: 'string', isOptional: true},
        {name: 'last_updated_on_versa', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'inventory',
      columns: [
        {name: 'quantity_on_hand', type: 'number'},
        {name: 'measurement_unit_name', type: 'string'},
        {name: 'facility_code', type: 'string'},
        {name: 'inventory_updated_at', type: 'number'},
        {name: 'product_id', type: 'string'},
      ],
    }),
  ],
});
