import React from 'react';
import styled from 'styled-components';

const SideBarList = (props) => {
    const { title, list, link } = props;

    const listItems = list.map(( item, index ) => <ListItem key={index}>{ item.name }</ListItem> );

    return (
        <Container>
            <Title>{ title }</Title>
            <List>
                { listItems }
            </List>
            <a href={ link }><Button>See All</Button></a>
        </Container>
    );
}

export default SideBarList;

const Container = styled.div`
    margin-bottom: 20px;    
    padding: 0 15px;
`;

const List = styled.ul`
    padding: 0;
    list-style-type: none;
`;

const Title = styled.h3`
    margin: 0;
    padding: 0 0 10px;
    border-bottom: 1px solid grey;
`;

const ListItem = styled.li`
    margin: 10px 0;
`;

const Button = styled.button`
    text-decoration: none;
    background: #dc5050;
    border-radius: 4px;
    padding: 7px 20px;
    color: white;

    border-color: transparent;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;

    transition: background 0.2s ease-in; 
    
    &:hover {
        background: #c44747;
    }
`;