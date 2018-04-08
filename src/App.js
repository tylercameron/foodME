import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import MapPage from './components/MapPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>          
          <Header />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/map" component={MapPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
