import React from 'react';
import './App.css';
import WebCamCapture from './WebCamCapture';
import Preview from './Preview';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='app__body'>
          <Switch>
            <Route exact path='/preview'>
              <Preview />
            </Route>
            <Route exact path='/'>
              <WebCamCapture />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
