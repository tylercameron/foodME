import React, { Component } from 'react';
import bangbang from '../assets/bangbang.jpg';
import user from '../assets/user.jpg';
import fakeData from '../fakeData/fakeData';

import styled from 'styled-components';

class Home extends Component {
    reviewDataTiles() {
        const test = fakeData.map((review, index) => {
            return (
                <Tile key={index}>
                    <TileHeader>
                        <TileUserIcon>
                            <Img src={user} alt="user" />
                        </TileUserIcon>
                        <div>
                            <Reviewer>{review.user} <Span>@ {review.place}</Span></Reviewer>
                            <ReviewDate>{review.date}</ReviewDate>
                        </div>
                    </TileHeader>
                    <ReviewDescrip>{review.description}</ReviewDescrip>
                    <div>
                        <Img src={bangbang} alt="bangbang" />
                    </div>
                </Tile>
            );
        });
        return test;
    }
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <img src={bangbang} alt="bangbang" />
                {this.reviewDataTiles()}
            </div>
        )
    }
}

// const StyledLink = styled(NavLink) `
//     border-radius: 3px;
//     padding: 0.25em 1em;
//     margin: 0 1em;
//     background: transparent;
//     color: palevioletred;
//     border: 2px solid palevioletred;
//     text-decoration: none;

//     &.selected {
//         color: blue;
//     }
// `;

const Tile = styled.div`
    background: #ebebeb;
    border-radius: 10px;
    margin: 15px 30px;
    padding: 30px;
`;

const TileHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid white;
`;

const TileUserIcon = styled.div`
    margin-right: 20px;
    width: 60px;
`;

const Reviewer = styled.h4`
    margin: 0 0 10px;
    font-weight: 400;
`;

const Span = styled.span`
    font-weight: 600;
`;

const ReviewDescrip = styled.p`
    font-weight: 300;
    margin-bottom: 13px;
`;

const Img = styled.img`
    width: 100%;
    height: auto;
`;

const ReviewDate = styled.p`
    margin: 0;
    font-weight: 100;
`;


export default Home;