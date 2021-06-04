import React from 'react';
import './DesignProjectItem.css';
import DesignList from '../../components/DesignList/DesignList';
function DesignProjectItem() {
  return (
    <div className = "ProjectItemMain">
      <div className = "TitleProjectItem">
        <p>Name</p>
        <p>Budget</p>
      </div>
      <DesignList />
    </div>
  );
}
export default DesignProjectItem;