import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import WebCamCapture from './WebCamCapture';
import Preview from './Preview';
import Chats from './Chats';
import ChatView from './ChatView';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { login, logout, selectUser } from './features/appSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='App'>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <img
              src='https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg'
              alt='snapchatlogo  '
              className='app__logo'
            />
            <div className='app__body'>
              <div className='app__bodyBackground'>
                <Switch>
                  <Route path='/chats/view'>
                    <ChatView />
                  </Route>
                  <Route path='/chats'>
                    <Chats />
                  </Route>
                  <Route path='/preview'>
                    <Preview />
                  </Route>
                  <Route exact path='/'>
                    <WebCamCapture />
                  </Route>
                </Switch>
              </div>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
