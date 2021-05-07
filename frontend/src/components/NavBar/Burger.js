import React, { useState } from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 12.5px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: white;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = ({cartSize}) => {
    const [open, setOpen] = useState(false)

    const handleBurgerClick = () => {
        setOpen(!open)
    }
  
    return (
        <>
        <StyledBurger open={open} onClick={handleBurgerClick}>
            <div />
            <div />
            <div />
        </StyledBurger>
        <SideBar open={open} handleBurgerClick={handleBurgerClick} cartSize={cartSize}/>
        </>
    )
}

export default Burger;