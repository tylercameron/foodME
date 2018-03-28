import React from 'react';
import styled from 'styled-components';

const PostTile = (props) => {
    const { userImg, review, reviewImage } = props;
    
    return (
        <Tile>
            <TileHeader>
                <TileUserIcon>
                    <Img src={userImg} alt="user" />
                </TileUserIcon>
                <div>
                    <Reviewer>{review.user} <Span>@ {review.place}</Span></Reviewer>
                    <ReviewDate>{review.date}</ReviewDate>
                </div>
            </TileHeader>
            <ReviewDescrip>{review.description}</ReviewDescrip>
            <div>
                <Img src={reviewImage} alt="bangbang" />
            </div>
        </Tile>
    )
};

export default PostTile;

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
