import React from 'react';
import './ListItem.css';
import Item from '../../components/Item/Item';
var Columns = require('react-columns');
function ListItem() {
  var queries = [{
    columns: 2,
    query: 'min-width: 500px'
  }, {
    columns: 3,
    query: 'min-width: 1000px'
  }];
  return (
    <Columns queries={queries}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Columns>
  );
}
export default ListItem;