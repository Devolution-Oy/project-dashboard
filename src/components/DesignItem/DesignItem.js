import React from 'react';
import './DesignItem.css';
import PropTypes from 'prop-types';
function DesignItem(props) {
  return (
    <div data-testid = "RowItem" className="row">
      <div className="column">
        <h2>{props.title}</h2>
        <p>{props.budget}</p>
        <p>{props.task}</p>
      </div>
    </div>
  );
}
DesignItem.propTypes = {
  title: PropTypes.string.isRequired,
  budget: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired
};
export default DesignItem;