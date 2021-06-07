import React from 'react';
import './DesignItem.css';
<DesignItem header='Item header text' />;
function DesignItem() {
  return (
    <div data-testid = "RowItem" className="row">
      <div className="column">
        <h2>{this.props.header}</h2>
        <p>Budget: 750€/1000€</p>
        <p>Task: 7/10</p>
      </div>
    </div>
  );
}
export default DesignItem;