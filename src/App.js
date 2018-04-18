import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';
import MapPage from './components/MapPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>          
          <Header />

          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/map" component={MapPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
