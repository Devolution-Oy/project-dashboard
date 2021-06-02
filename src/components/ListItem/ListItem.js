import React from 'react';
import './ListItem.css';
import '../../components/Item/Item';
import Item from '../../components/Item/Item';
function ListItem() {
  return (
    <div id = "ListCenter">   
      <ul className="container flex">
        <li data-testid = "TestItem" className="item flex-item"><Item /></li>
        <li className="item flex-item"><Item /></li>
        <li className="item flex-item"><Item /></li>
      </ul>
      <ul className="container flex">
        <li className="item flex-item"><Item /></li>
        <li className="item flex-item"><Item /></li>
        <li className="item flex-item"><Item /></li>
      </ul>
    </div>
  );
}
export default ListItem;