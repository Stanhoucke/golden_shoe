import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MailingList = styled.div`
    margin: 2em 5%;
    display: flex;
    justify-content: space-around;
    padding: 2em;
    background-color: darkred;
    color: white;
    border-top-left-radius: 150px;
    border-bottom-left-radius: 150px;

    .mailing-list-message {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        padding-left: 2em;
    }
    .mailing-list-message > a {
        color: white;
        margin: 18px 0;
    }

    .discount-wrapper {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
    }
    #discount {
        font-size: 10em;
        margin: 0;
        color: gold;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;

        .mailing-list-message {
            width: 80%;
            align-items: center;
            padding-left: 0em;
        }

        .discount-wrapper {
            order: -1;
            align-items: center;
        }
    }
`;

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

const Shop = ({shoes, imgUrl}) => {
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
            <MailingList>
                <div className="mailing-list-message">
                    <p>Be the first to hear about new releases!</p>
                    <p>Receive discount vouchers</p>
                    <Link to = {"/"}>Add me to mailing list</Link>
                </div>
                <div className="discount-wrapper">
                    <h1 id="discount">£10</h1>
                    <h3>DISCOUNT - online & in-store</h3>
                </div>
            </MailingList>

            <h3>ALL PRODUCTS</h3>
            <ShoeUl className="shoes-list">
                {shoesList}
            </ShoeUl>
        </>
    )
}

export default Shop;