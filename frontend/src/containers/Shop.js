import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ShoesList from '../components/ShoesList';
import { ShoeContext } from '../context/ShoeContext';

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

const Shop = ({imgUrl}) => {
    const {featuredShoes} = useContext(ShoeContext);
    if (featuredShoes.length === 0){
        return (<p>Loading...</p>)
    }

    return(
        <>
            <MailingList data-cy='news-banner'>
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

            <h3>FEATURED PRODUCTS</h3>
            <ShoesList shoes={featuredShoes} imgUrl={imgUrl} />
        </>
    )
}

export default Shop;