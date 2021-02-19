import React from 'react';
import './Chat.css';
import Message from './Message/Message';

import ChatHeader from './ChatHeader/ChatHeader';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { selectChannelName, selectChannelId } from '../../features/appSlice';

const Chat = () => {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);

  return (
    <div className='chat'>
      <ChatHeader channelName={channelName} />

      <div className='chat__messages'>
        <Message />
        <Message />
        <Message />
      </div>

      <div className='chat__input'>
        <AddCircleIcon fontSize='large' />
        <form>
          <input placeholder={`Message #TESTCHANNEL`} />
          <button className='chat__inputButton' type='submit'>
            Send Message
          </button>
        </form>
        <div className='chat__inputIcons'>
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
};

export default Chat;
