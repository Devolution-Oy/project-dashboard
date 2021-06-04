import React from 'react';
import './DesignList.css';
import DesignItem from '../../components/DesignItem/DesignItem';
import Columns from 'react-columns';
function DesignList() {
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
    <div data-testid = "List" className="CenterDesignList">
      <div className = "ColumnList">
        <Columns gap = {'40px'} queries={queries}>
          <DesignItem />
          <DesignItem />
          <DesignItem />
          <DesignItem />
          <DesignItem />
          <DesignItem />
          <DesignItem />
          <DesignItem />
          <DesignItem />
          <DesignItem />
        </Columns>
      </div>
    </div>
  );
}
export default DesignList;