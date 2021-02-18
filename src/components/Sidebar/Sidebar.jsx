import React from 'react';
import './Sidebar.css';
import SidebarChannel from '../SidebarChannel/SidebarChannel';
import ExpendMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

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
          <AddIcon className='sidebar__addChannel' />
        </div>
        <div className='sidebar__channelsList'>
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>
      <div className='sidebar__voice'>
        <SignalCellularAltIcon
          className='sidebar__voiceIcon'
          fontSize='large'
        />
        <div className='sidebar__voiceInfo'>
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className='sidebar__voiceIcons'>
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>
      <div className='sidebar__profile'>
        <Avatar src='https://avatars.githubusercontent.com/u/54185788?s=400&u=e300c4156729bf78a943366a69d3a1e750dbeae4&v=4' />
        <div className='sidebar__profileInfo'>
          <h3>@Mutasem</h3>
          <p>#ThisIsMyID</p>
        </div>
        <div className='sidebar__profileIcons'>
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
