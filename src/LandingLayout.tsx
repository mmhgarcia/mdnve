import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from './Components/Landing/Landing';
import PublicLayout from './PublicLayout';

const Landing= () => {

  return (
    <>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/landing" component={LandingPage} />
            <Route exact path="/" component={PublicLayout} />
          </Switch>
        </div>
      </Router>
    </>
  );

}

export default Landing;