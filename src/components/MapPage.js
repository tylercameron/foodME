import React, { Component } from 'react';
import Map from './Map';
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
                    <SearchContainer>
                        <Form action="" method="get">                            
                            <Input type="text" id="city" placeholder="Search by city" />
                            <Button type="submit">Search</Button>                            
                        </Form>
                    </SearchContainer>
                    
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

const SearchContainer = styled.div`
    background: #484040;
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

const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;

    padding: 10px 0;
`;

// const InputContainer = styled.div`
//     display: flex;
//     justify-content: space-around;
//     // margin: 35px 20px 15px;
//     margin: 12px;
// `;

// const Label = styled.label`
//     padding: 5px;
//     font-size: 18px;

//     // flex: 1;
// `;

const Input = styled.input`
    background: none;
    border: none;
    border-bottom: 2px solid #a3a3a3;
    color: white;
    width: 65%;
    padding: 5px;
    font-size: 18px;
    letter-spacing: 1px;

    // flex: 2;

    margin: 0 10px 0 20px;
`;

const Button = styled.button`
    // width: 200px;
    flex: 1;
    background: #009688;
    border: none;
    border-radius: 6px;
    // margin: 0 auto 15px;
    // margin: 15px 10px;
    // padding: 10px 10px;
    color: white;
    font-size: 17px;
    letter-spacing: 2px;

    cursor: pointer;

    margin: 0 10px;

    transition: background 0.1s ease-out;

    &:hover {
        background: #00b7a6;
    }
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
