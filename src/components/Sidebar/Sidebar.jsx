import React from 'react';
import './Sidebar.css';
import ExpendMoreIcon from '@material-ui/icons/ExpandMore';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h3>MutasemKwaik</h3>
        <ExpendMoreIcon />
      </div>
      <div className='sidebar__channels'>
        <div className='sidebar__channelsHeader'>
          <div className='sidebar__header'>
            <ExpendMoreIcon />
            <h4>Text Channel</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
