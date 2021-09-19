import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const NoStockMessage = styled.div`
    margin: 1em 5%;
    background-color: rgba(255, 0, 0, 0.2);
    color: red;
    font-weight: bold;
    display: flex;
    justify-content: center;
    border: solid;
`;

const HomeLink = styled.div`
    margin: 2em 0;
`;

const ShoeDetailContainer = styled.div`
    margin: 0 5%;
    padding: 2em 0;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr 3fr;
    background-color: lightgray;

    .carousel-root {
        width: 75%;
    }

    .shoe-images {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 3;

        display: flex;
        justify-content: center;
    }

    .shoe-info {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        padding-left: 2em;
    }

    .form-item {
        margin: 1em 0;
    }
    
    .shoe-form {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        padding-left: 2em;
    }

    #size-guide-link {
        padding-left: 1em;
    }

@media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 10.5em;
    
    .shoe-images {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
    }
    .shoe-info {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 3;
    }
    .shoe-form {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
    }
}

@media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 10.5em 10em;

    .shoe-images {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
    }
    .shoe-info {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 3;
    }
    .shoe-form {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 3;
        grid-row-end: 4;
    }
    @media (max-width: 360px) {
        .carousel-root {
            margin-left: 5%;
        }
        .shoe-images {
            width: 90%;
            justify-content: flex-start;
        }
    }
}
`;

const ShoeDetails = ({shoe, addToCart, imgUrl}) => {
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedQuantity, setSelectedQuantity] = useState(0);
    const [checkStock, setCheckStock] = useState(false);

    if (!shoe) {
        return <p>Loading...</p>
    }

    const shoeSizes = shoe.sizes.map((size, index) => {
        let sizeValue = Object.keys(size);
        return (
            <option key={index} value={sizeValue}>{sizeValue}</option>
        )
    })

    const handleSelectedSizeChange = (event) => {
        setSelectedSize(event.target.value);
    }

    const handleSelectedQuantityChange = (event) => {
        setSelectedQuantity(parseInt(event.target.value))
    }

    const isInStock = () => {
        let inStock = false;
        for (const size of shoe.sizes) {
            if (selectedQuantity <= size[selectedSize]) {
                inStock = true;
            }
        }
        return inStock;
    }

    const stockMessage = (checkStock) ?
        <NoStockMessage>
            <p id="no-stock-message">This item is currently unavailable in this quantity</p>
        </NoStockMessage>
        :
        <></>

    const handleAddShoeToCart = () => {
        let inStock = isInStock()
        if (!inStock) {
            setCheckStock(true);
        } else {
            if (selectedSize !== "" && selectedQuantity > 0) {
                const item = {
                    "shoe": shoe,
                    "size": selectedSize,
                    "quantity": selectedQuantity,
                    "price": shoe.price 
                }
                addToCart(item);
                setSelectedSize("");
                setSelectedQuantity(0);
                setCheckStock(false);
            }
        }
    }

    return(
        <>
            {stockMessage}
            <ShoeDetailContainer>
                <div className="shoe-images">
                    <Carousel>
                        <div>
                            <img src={imgUrl + shoe.imageUrls[0]} alt={shoe.brand + " " + shoe.name + " image"}/>
                        </div>
                        <div>
                            <img src={imgUrl + shoe.imageUrls[1]} alt={shoe.brand + " " + shoe.name + " image"}/>
                        </div>
                        <div>
                            <img src={imgUrl + shoe.imageUrls[2]} alt={shoe.brand + " " + shoe.name + " image"}/>
                        </div>
                    </Carousel>
                </div>

                <div className="shoe-info">
                        <h2>{shoe.name}</h2>
                        <p>{shoe.brand}</p>
                        <p><strong>£{shoe.price.toFixed(2)}</strong></p>
                </div>
                <div className="shoe-form">
                        <div className="choose-size">
                            <select className="sizes form-item" value={selectedSize} onChange={handleSelectedSizeChange}>
                                <option value="" disabled hidden>Choose a size</option>
                                {shoeSizes}
                            </select>
                            <Link id="size-guide-link" to = {"/help"}>size guide</Link>
                        </div>

                        <div className="quantity-wrapper form-item">
                            <label htmlFor="quantity">Quantity: </label>
                            <input type="number" name="quantity" min="0" max="5" value={selectedQuantity} onChange={handleSelectedQuantityChange}></input>
                        </div>
                        
                        <button className="form-item" onClick={handleAddShoeToCart}>
                            Add to Cart
                        </button>
                </div>
            </ShoeDetailContainer>
            <HomeLink>
                <Link to = {"/"}>Back to shop</Link>
            </HomeLink>
        </>
    )
}

export default ShoeDetails;