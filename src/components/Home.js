import React, { Component } from 'react';
import PostTile from './PostTile';

import fakeData from '../fakeData/fakeData';

import bangbang from '../assets/bangbang.jpg';
import user from '../assets/user.jpg';
// import styled from 'styled-components';

class Home extends Component {
    reviewDataTiles() {
        const tiles = fakeData.map((review, index) => (
            <PostTile key={index} userImg={user} review={review} reviewImage={bangbang} />
        ));            
        return tiles;
    }
    render() {
        return (
            <div>
                <h1>Foodie Feed</h1>
                {this.reviewDataTiles()}
            </div>
        )
    }
}

export default Home;