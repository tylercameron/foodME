import React, { Component } from 'react';
import PostTile from './PostTile';
import SideBarList from './SideBarList';

import styled from 'styled-components';

import reviews from '../fakeData/reviews';
import users from '../fakeData/users';

import bangbang from '../assets/bangbang.jpg';
import user from '../assets/user.jpg';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            currentUser: users[0]
        }
    }

    postTiles() {
        const tiles = reviews.map((review, index) => (
            <PostTile key={index} userImg={user} review={review} reviewImage={bangbang} />
        ));            
        return tiles;
    }

    render() {
        const { currentUser } = this.state;

        return (
            <Content>
                <MainContent>
                    <h1>Foodie Feed</h1>
                    {this.postTiles()}
                </MainContent>
                <SideBar>
                    <SideBarList title="Following" list={currentUser.following} link="/followers" />
                    <SideBarList title="Favorite Places" list={currentUser.favoritePlaces} link="/favs" />
                    <SideBarList title="Preferences" list={currentUser.preferences} link="/preferences" />
                </SideBar>
            </Content>
        )
    }
}

export default Home;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const MainContent = styled.div`
    width: 70%;
    border-right: 1px solid #9d0100;
`;

const SideBar = styled.aside`
    width: 30%;
    padding-top: 25px;
    height: 100%;
`;