import React, { Component } from 'react';
import reviews from '../fakeData/reviews';

import styled from 'styled-components';

// import user from '../assets/user.jpg';
import icecream from '../assets/icecream.jpg';
import map from '../assets/map@2x.jpg';

class Map extends Component {
    reviewTiles() {
        const restaurantName = "Bang Bang Ice Cream & Bakery";
        const restaurantReviews = reviews.filter((store) => (store.place === restaurantName));
        const tiles = restaurantReviews.map((review, index) => (
            <li key={index}>
                <h4>{review.user}</h4>
                <div className="img-cont"><Img src={icecream} alt=""/></div>
                <p>{review.description}</p>
            </li>
        ))
        return tiles;
    }

    render() {
        return (
            <Container>
                <MainContent>
                    <SearchContainer>
                        <Form action="" method="get">
                            <InputContainer>
                                <Label htmlFor="city">Search by city</Label>
                                <Input type="text" id="city"/>
                            </InputContainer>
                            <Button type="submit">Find Restaurants</Button>
                        </Form>
                    </SearchContainer>
                    <div className="map-container"><Img src={map} alt="Map"/></div>
                </MainContent>
                <SideBar>
                    <ul>
                        {this.reviewTiles()}
                    </ul>
                </SideBar>
            </Container>
        )
    }
}

export default Map;

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const MainContent = styled.div`
    width: 65%;
`;

const SearchContainer = styled.div`
    background: grey;
`;

const Img = styled.img`
    max-width: 100%;
`;

const SideBar = styled.div`
    width: 35%;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-content: center;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 35px 20px 15px;
`;

const Label = styled.label`
    padding: 5px;
    font-size: 18px;
`;

const Input = styled.input`
    background: none;
    border: none;
    border-bottom: 2px solid black;
    width: 65%;
    padding: 5px;
    font-size: 18px;
    letter-spacing: 1px;
`;

const Button = styled.button`
    width: 200px;

    background: red;
    border: none;
    border-radius: 6px;
    margin: 0 auto 15px;
    padding: 10px 10px;
    color: white;
    font-size: 17px;
    letter-spacing: 2px;

    cursor: pointer;
`;