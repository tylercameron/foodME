import React, { Component } from 'react';
import Map from './Map';
import SearchForm from './SearchForm';
import reviews from '../fakeData/reviews';

import styled from 'styled-components';

// import user from '../assets/user.jpg';
import icecream from '../assets/icecream.jpg';
import map from '../assets/map@2x.jpg';

class MapPage extends Component {
    reviewTiles() {
        const restaurantName = "Bang Bang Ice Cream & Bakery";
        const restaurantReviews = reviews.filter((store) => (store.place === restaurantName));
        const tiles = restaurantReviews.map((review, index) => (
            <Review key={index}>
                <Author>{review.user}</Author>
                <Description>{review.description}</Description>
                <div className="img-cont"><Img src={icecream} alt=""/></div>
            </Review>
        ))
        return tiles;
    }

    render() {
        return (
            <Container>
                <MainContent>
                    <SearchForm />                    
                    <Map location={map} />
                </MainContent>
                <SideBar>
                    <ReviewList>
                        {this.reviewTiles()}
                    </ReviewList>
                </SideBar>
            </Container>
        )
    }
}

export default MapPage;

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const MainContent = styled.div`
    width: 65%;
`;

const Img = styled.img`
    max-width: 100%;
`;

const SideBar = styled.div`
    width: 35%;

    // background: #a10000;
    height: calc(100vh - 67px);
    overflow: scroll;
`;

const ReviewList = styled.ul`
    padding: 0;
    list-style-type: none;
    margin: 0;
    display: flex;
    flex-direction: column;
`;

const Review = styled.li`
    // margin: 10px 10px 0;
    // background: yellow;
    padding: 15px 15px 14px;
    position: relative;

    &:after {
        position: absolute;
        width: 80%;
        height: 100%;
        top: 0;
        left: 10%;
        /* background: red; */
        /* z-index: 10; */
        content: '';
        border-bottom: 2px solid #ff595a;
    }

    &:last-child {
        margin-bottom: 10px;

        &:after {
            border-bottom: none;
        }
    }
`;

const Author = styled.h4`
    margin: 0 0 5px;
`;

const Description = styled.p`
    margin: 5px 0;
`;  
