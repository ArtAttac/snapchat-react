import { Avatar } from '@material-ui/core';
import React from 'react';
import './Chats.css';
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

function Chats() {
  return (
    <div className='chats'>
      <div className='chats__header'>
        <Avatar className='chats__avatar' />
        <div className='chats__search'>
          <SearchIcon />
          <input placeholder='Friends' type='text' />
        </div>
        <ChatBubbleIcon className='chats__chatIcon' />
      </div>
    </div>
  );
}

export default Chats;
