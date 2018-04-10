import React from 'react';
import styled from 'styled-components';

const SearchForm = () => {
    return (
        <SearchContainer>
            <Form action="" method="get">
                <Input type="text" id="city" placeholder="Search by city" />
                <Button type="submit">Search</Button>
            </Form>
        </SearchContainer>
    );
}

export default SearchForm;

const SearchContainer = styled.div`
    background: #484040;
`;

const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;

    padding: 10px 0;
`;

const Input = styled.input`
    background: none;
    border: none;
    border-bottom: 2px solid #a3a3a3;
    color: white;
    width: 65%;
    padding: 5px;
    font-size: 18px;
    letter-spacing: 1px;
    
    margin: 0 10px 0 20px;
`;

const Button = styled.button`    
    flex: 1;
    background: #009688;
    border: none;
    border-radius: 6px;            
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