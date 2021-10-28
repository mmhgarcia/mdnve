import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import * as bootstrap from 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import PublicLayout from './PublicLayout';
import LandingLayout from './LandingLayout';

import './App.css';

function App() {
  
  return (    
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={PublicLayout} />
          <Route path='/landing' component={LandingLayout} />        
        </Switch>
      </Router>
    </>
  );
}

export default App;

    
