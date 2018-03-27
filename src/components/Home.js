import React, { Component } from 'react';
import bangbang from '../assets/bangbang.jpg';
import user from '../assets/user.jpg';
import fakeData from '../fakeData/fakeData';

class Home extends Component {
    reviewDataTiles() {
        const test = fakeData.map((review, index) => {
            return (
                <div className="tileContainer">
                    <div className="tileHeader">
                        <div className="tileUserIcon">
                            <img src={user} alt="user" />
                        </div>
                        <div className="tileHeaderText">
                            <h4 key={index}>{review.user} <span>@ {review.place}</span></h4>
                            <p>{review.date}</p>
                        </div>
                    </div>
                    <p className="tileDescrip">{review.description}</p>
                    <div className="tileImageContainer">
                        <img src={bangbang} alt="bangbang" />
                    </div>
                </div>
            );
        });
        // return <h1>{fakeData[0].user}</h1>;
        // console.log(fakeData);
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

export default Home;