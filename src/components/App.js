import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './Header'
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Switch>
        <Route exact path='/' component={() => <h1>Home</h1>} />
        <Route exact path='/about' component={() => <h1>About</h1>} />
        <Route exact path='/projects' component={() => <h1>Projects</h1>} />
        <Route exact path='/contact' component={() => <h1>Contact</h1>} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
