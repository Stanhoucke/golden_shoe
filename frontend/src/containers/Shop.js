import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ShoeUl = styled.ul`
background-color: pink;
list-style: none;
padding: 0px;
display: flex;


.shoe-link {
    text-decoration: none;
}

.shoe-image-main {
    height: 50vh;
}
`;

const Shop = ({shoes}) => {
    const imgUrl = "http://localhost:8080/api/getImages/"

    if (shoes.length === 0){
        return (<p>Loading...</p>)
    }

    const shoesList = shoes.map((shoe, index) => {
        return (
            <li key={shoe.id} className="shoe-item">
                <Link to = {"/shoes/" + shoe.id} className="shoe-link">
                    <div className="shoe">
                        <img src={imgUrl + shoe.imageUrls[0]} className="shoe-image-main" alt={shoe.brand + " " + shoe.name + " image"}/>
                        <p>{shoe.brand}</p>
                        <p>{shoe.name}</p>
                        <p>£{shoe.price.toFixed(2)}</p>
                    </div>
                </Link>

            </li>
        )
    })

    return(
        <>
            <h3>Shop</h3>
            <ShoeUl className="shoes-list">
                {shoesList}
            </ShoeUl>
        </>
    )
}

export default Shop;