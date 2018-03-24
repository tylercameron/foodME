import React, { Component } from 'react';
import bangbang from '../assets/bangbang.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <img src={bangbang} alt="bangbang" />
            </div>
        )
    }
}

export default Home;