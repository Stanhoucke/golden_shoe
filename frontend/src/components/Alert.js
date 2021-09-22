import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AlertStyle = styled.div`
    position: fixed;
    z-index: 1;
    width: 50%;
    top: 45px;
    left: 0;
    right: 0;
    display: ${ ({modalDisplay}) => modalDisplay };
    justify-content: space-between;
    background-color: lightblue;
    font-weight: bold;
    color: blue;
    border: solid;
    border-width: 1px;
    border-radius: 5px;
    margin: 1em 20%;
    padding: 0.4em;
`;

const MessageStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MessageDismissStyle = styled.div`
    button {
        color: grey;
        background: none;
        border: none;
        font-size: larger;
    }
    button:hover {
        cursor: pointer;
    }
`;

const Alert = ({errorMessage, setErrorMessage}) => {
    const [modalDisplay, setModalDisplay] = useState('none');
    const openModal = () => {
        setModalDisplay('flex');
    }
    const closeModal = () => {
        setModalDisplay('none'); 
        setErrorMessage(null);
    }
    useEffect(() => {
        if(errorMessage !== null) {
            openModal();
            const timer = setTimeout(() => {
                closeModal();
            }, 5000);
            return () => clearTimeout(timer);
        } else {
            closeModal()
        }
    });
    
    return(
        <AlertStyle modalDisplay={modalDisplay} data-cy="alert">
            <MessageStyle>
                <span>{errorMessage}</span>
            </MessageStyle>
            <MessageDismissStyle>
                <button type="button" aria-label="Close" onClick={() => closeModal()}>x</button>
            </MessageDismissStyle>
        </AlertStyle>
    )
} 

export default Alert