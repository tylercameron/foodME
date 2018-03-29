import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';



class Header extends Component {
    renderContent() {
        // switch (this.props.auth) {
            // case null:
            //     return;
            // case false:
            //     return <li><a href="/auth/google">Login With Google</a></li>;
            // default:
                return [
                    <ListItem key="1"><StyledLink to='/' exact activeClassName="selected">Home</StyledLink>{' '}</ListItem>,
                    <ListItem key="2"><StyledLink to='/about' activeClassName="selected">About</StyledLink>{' '}</ListItem>,
                    <ListItem key="3"><StyledLink to='/map' activeClassName="selected">Map</StyledLink></ListItem>                    
                ]
        // }
    }

    render() {
        return (
            <Container>
                <Link to='/' className="brand-logo"><h1 style={{ margin: 0 }}>Logo</h1></Link>
                <Nav>
                    <Ul>
                        {this.renderContent()}
                    </Ul>
                </Nav>
            </Container>
        );
    }
}

export default (Header);

const Container = styled.header`
    background: #ff5a5a;
    display: flex;
    justify-content: space-between;
    margin: 0 0 10px;
    padding: 15px 30px;
`;

const ListItem = styled.li`
    border-right: 1px solid #9d0000;
    padding: 0.25em 1em;
    
    display: flex;
    align-items: center;

    &:last-child {
        padding-right: 0;
        border-right: none;
    }
`;

const StyledLink = styled(NavLink)`
    margin: 0;
    background: transparent;
    color: white;
    text-decoration: none;

    transition: color 0.1s ease-in;

    &.selected {
        color: #9d0000;
    }

    &:hover {
        color: #9d0000;
    }
`;

const Ul = styled.ul`
    list-style-type: none;
    padding-left: 0;
    display: flex;
    justify-content: flex-end;
    margin: 0;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
`;