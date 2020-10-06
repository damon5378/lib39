import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/pages/Home';
import Works from './components/pages/Works';
import Archive from './components/pages/Archive';
import Exhibitions from './components/pages/Exhibitions';
import About from './components/pages/About';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/exhibitions" component={Exhibitions}/>
        <Route path="/archive" component={Archive}/>
        <Route path="/works" component={Works}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
