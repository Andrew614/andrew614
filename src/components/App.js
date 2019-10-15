import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Projects from './Projects'
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
            <Route exact path='/projects' component={() => <Projects />} />
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
