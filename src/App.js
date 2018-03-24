import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import styled from 'styled-components';

import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Map from './components/Map';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header className="App-header">
            <Header />
          </header>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/map" component={Map} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
