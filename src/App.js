import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

import PostState from './context/post/PostState';

function App() {
  return (
    <PostState>
      <Router>
        <Fragment className='App'>
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </div>{' '}
        </Fragment>
      </Router>
    </PostState>
  );
}

export default App;
