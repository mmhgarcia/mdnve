import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Info from './Components/Info/Info';
import Contact from './Components/Contact/Contact'
import Terms from './Components/Terms/Terms'
import Privacy from './Components/Privacy/Privacy'
import Footer from './Components/Footer/Footer';

const PublicLayout = () => {

  return(
    <>      
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />         
          <Route path="/info" component={Info} />
          <Route path="/contact" component={Contact} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
        </Switch>
        <Footer />
      </Router>
    </>
  );

}

export default PublicLayout;
