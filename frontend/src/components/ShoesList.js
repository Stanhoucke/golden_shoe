import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ShoeContext } from '../context/ShoeContext';

const ShoeUl = styled.ul`
list-style: none;
padding: 0px;
margin: 0 5%;
display: grid;
grid-template-columns: repeat(3, 1fr);
column-gap: 5px;
row-gap: 5px;
margin-bottom: 5%;

.shoe {
    background-color: lightgrey;
    padding: 2em 0;
}

.shoe-link {
    text-decoration: none;
    color: black;
}

.shoe-image-main {
    width: 25vw;
}

.shoe-info {
    margin: 1em 2em 0 2em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.shoe-info > p {
    margin-top: 0;
}

@media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    
    .shoe-image-main {
        width: 40vw;
    }
}
@media (max-width: 768px) {
    grid-template-columns: 1fr;
    
    .shoe-image-main {
        width: 80vw;
    }

    .shoe-info {
        margin: 1em 3em 0 3em;
    }
}

`;

const ShoesList = ({shoes, imgUrl}) => {
    if (shoes.length === 0){
        return (<p>Loading...</p>)
    }

    const shoesList = shoes.map((shoe, index) => {
        return (
            <li key={shoe.id} className="shoe-item">
                <div className="shoe">
                    <Link to = {"/shoes/" + shoe.id} className="shoe-link">
                        <img src={imgUrl + shoe.imageUrls[0]} className="shoe-image-main" alt={shoe.brand + " " + shoe.name + " image"}/>
                        <div className="shoe-info">
                                <p>{shoe.brand}</p>
                                <p>{shoe.name}</p>
                            <p>£{shoe.price.toFixed(2)}</p>
                        </div>
                    </Link>
                </div>

            </li>
        )
    })

    return(
        <>
            <ShoeUl className="shoes-list">
                {shoesList}
            </ShoeUl>
        </>
    )
}

export default ShoesList;