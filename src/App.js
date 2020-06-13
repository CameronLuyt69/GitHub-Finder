import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/Layout/NavBar';
import User from './Components/Users/User';
import Alert from './Components/Layout/Alert';
import About from './Components/Pages/About';
import NotFound from './Components/Pages/NotFound';
import Home from './Components/Pages/Home';
import GithubState from './Context/github/GithubState';
import AlertState from './Context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <NavBar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                  <Route exact path='/About' component={About} />
                  <Route exact path='/user/:login' component={User} />
                  <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
