import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
    padding-left: 0;
    width: 50%;
    list-style: none;
    display: flex;
    justify-content: flex-end;

        li {
            margin-left: 5%;
        }

        .nav-link {
            color: white;
            text-decoration: none;
            font-weight: bold;
        }

    @media (max-width: 768px) {
        background-color: darkred;
        flex-direction: column;
        list-style: none;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        right: 0;
        margin: 0;
        padding: 12.5vh 0em;
        transition: transform 0.3s ease-in-out;
        li {
            height: 25vh;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

const SideBar = ({open, handleBurgerClick}) => {
    return (
        <Ul open={open}>
          <li>
            <Link to = {"/cart"} className="nav-link" onClick={handleBurgerClick}>Cart</Link>
          </li> 
          <li>
            <Link to = {"/"} className="nav-link" onClick={handleBurgerClick}>Home</Link>
          </li>
          <li>
            <Link to = {"/help"} className="nav-link" onClick={handleBurgerClick}>Help</Link>
          </li>
          
        </Ul>
      )
}

export default SideBar;