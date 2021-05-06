import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
    background-color: darkred;
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;

    padding: 0 5%;
    height: 55px;
    box-shadow: 0 0 5px rgb(200 0 0 / 50%);
    display: flex;
    justify-content: space-between;

    .logo {
        width: 33%;
        display: flex;
        align-items: center;
    }

    #golden-shoe {
        color: gold;
        font-weight: bold;
        text-decoration: none;
    }

`;

const NavBar = () => {
    return (
        <Nav>
            <div className="logo">
                <Link to = {"/"} id="golden-shoe">Golden Shoe</Link>
            </div>
            <Burger/>
        </Nav>
    )
}

export default NavBar;