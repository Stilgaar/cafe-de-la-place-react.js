
import './App.css';
// import { useState, useEffect } from "react";
import Navigation from './Navigation/navigation.js';
import Stock from './stock.js';
import Home from  './Home.js';
import Contact from './contact';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (

    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/">  
          <Home />      
          </Route>
          <Route path="/stock">
            <Stock />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
