import { Avatar } from '@material-ui/core';
import React from 'react';
import './Chat.css';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import ReactTimeago from 'react-timeago';
import { selectImage } from './features/appSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { db } from './firebase';

function Chat({ id, username, timestamp, imageUrl, read, profilePic }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));
      db.collection('posts').doc(id).set(
        {
          read: true,
        },
        { merge: true }
      );

      history.push('/chats/view');
    }
  };

  return (
    <div onClick={open} className='chat'>
      <Avatar className='chat__avatar' src={profilePic} />
      <div className='chat__info'>
        <h4>{username}</h4>
        <p>
          {!read && 'Tap to view -'}{' '}
          <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
        </p>
        {!read && <StopRoundedIcon className='chat_readIcon' />}
      </div>
    </div>
  );
}

export default Chat;
