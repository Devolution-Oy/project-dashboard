import React from 'react';
import './ListItem.css';
import Item from '../../components/Item/Item';
import Columns from 'react-columns';
function ListItem() {
  var queries = [{
    columns: 1,
    query: 'min-width: 600px'
  }, {
    columns: 2,
    query: 'min-width: 800px'
  }, {
    columns: 3,
    query: 'min-width: 1000px'
  }, {
    columns: 4,
    query: 'min-width: 1200px'
  }, {
    columns: 5,
    query: 'min-width: 1400px'
  }];
  return (
    <div data-testid = "List" className="CenterListItem">
      <div className = "ColumnList">
        <Columns gap = {'40px'} queries={queries}>
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
      </div>
    </div>
  );
}
export default ListItem;