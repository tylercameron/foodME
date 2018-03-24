import React, { Component } from 'react';
import user from '../assets/user.jpg';

class Map extends Component {
    render() {
        return (
            <div>
                <h1>Map Page</h1>
                <img src={user} alt="user" />
            </div>
        )
    }
}

export default Map;