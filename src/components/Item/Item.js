import React from 'react';
import './Item.css';
function Item() {
  return (
    <div data-testid = "RowItem" className="row">
      <div className="column">
        <h2>Design 1</h2>
        <p>Budget: 750€/1000€</p>
        <p>Task: 7/10</p>
      </div>
    </div>
  );
}
export default Item;