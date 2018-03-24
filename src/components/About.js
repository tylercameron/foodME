import React, { Component } from 'react';
import icecream from '../assets/icecream.jpg';

class About extends Component {
    render() {
        return (
            <div>
                <h1>About Page</h1>
                <img src={icecream} alt="user" />
            </div>
        )
    }
}

export default About;