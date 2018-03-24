import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink) `
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: transparent;
    color: palevioletred;
    border: 2px solid palevioletred;
    text-decoration: none;

    &.selected {
        color: blue;
    }
`;

const Ul = styled.ul `
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

class Header extends Component {
    renderContent() {
        // switch (this.props.auth) {
            // case null:
            //     return;
            // case false:
            //     return <li><a href="/auth/google">Login With Google</a></li>;
            // default:
                return [
                    <li key="1"><StyledLink to='/' exact activeClassName="selected">Home</StyledLink>{' '}</li>,
                    <li key="2"><StyledLink to='/about' activeClassName="selected">About</StyledLink>{' '}</li>,
                    <li key="3"><StyledLink to='/map' activeClassName="selected">Map</StyledLink></li>                    
                ]
        // }
    }

    render() {
        return (
            <Nav>
                <Link to='/' className="brand-logo">Logo</Link>
                <Ul>
                    {this.renderContent()}
                </Ul>
            </Nav>
        );
    }
}

// a.selected {
//     background: red;
//     color: white;
// }

export default (Header);

// <nav>
//     <StyledLink to='/' exact activeClassName="selected">Home</StyledLink>{' '}
//     <StyledLink to='/about' activeClassName="selected">About</StyledLink>{' '}
//     <StyledLink to='/map' activeClassName="selected">Map</StyledLink>
// </nav>