import './App.css';
import Home from './components/Home/Home';
//react router dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//all components
import About from './components/About/About';
import NotPageFound from './components/NotPageFound/NotPageFound';
import ContactPage from './components/ContactPage/ContactPage';

import UniversityDetails from './components/UniversityDetails/UniversityDetails';
import Privcay from './components/Privacy/Privcay';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/home/:ranking">
            <UniversityDetails></UniversityDetails>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <ContactPage></ContactPage>
          </Route>
          <Route exact path="/privacy">
            <Privcay></Privcay>
          </Route>
          <Route exact path='*'>
            <NotPageFound></NotPageFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
