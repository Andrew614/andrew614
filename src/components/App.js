import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={() => <Home />} />
            <Route exact path='/about' component={() => <About />} />
            <Route exact path='/projects' component={() => <h1>Projects</h1>} />
            <Route exact path='/contact' component={() => <Contact />} />
            <Redirect to='/' />
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
