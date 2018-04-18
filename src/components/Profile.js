import React, { Component } from 'react';
import icecream from '../assets/icecream.jpg';

class Profile extends Component {
    render() {
        return (
            <div>
                <h1>Profile Page</h1>
                <img src={icecream} alt="user" />
            </div>
        )
    }
}

export default Profile;