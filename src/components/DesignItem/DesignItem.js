import React from 'react';
import './DesignItem.css';
function DesignItem() {
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
export default DesignItem;