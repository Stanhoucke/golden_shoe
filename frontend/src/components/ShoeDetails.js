import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ShoeDetailContainer = styled.div`
    margin: 0 5%;
    padding: 2em 0;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr 3fr;
    background-color: lightgray;

    .shoe-images {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 3;
    }

    .shoe-image-main {
        width: 50vw;
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

@media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 10.5em;
    
    .shoe-images {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
    }
    .shoe-image-main {
        width: 80vw
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
            <option key={index} value={sizeValue}>UK {sizeValue}</option>
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
        <p>This item is unavailable in this quantity</p>
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
            <h3>ShoeDetails</h3>
            {stockMessage}
            <ShoeDetailContainer>
                <div className="shoe-images">
                    <img src={imgUrl + shoe.imageUrls[0]} className="shoe-image-main" alt={shoe.brand + " " + shoe.name + " image"}/>
                </div>

                <div className="shoe-info">
                        <h2>{shoe.name}</h2>
                        <p>{shoe.brand}</p>
                        <p><strong>£{shoe.price.toFixed(2)}</strong></p>
                </div>
                <div className="shoe-form">
                        <select className="sizes form-item" value={selectedSize} onChange={handleSelectedSizeChange}>
                            <option value="" disabled hidden>Choose a size</option>
                            {shoeSizes}
                        </select>

                        <div className="quantity-wrapper form-item">
                            <label htmlFor="quantity">Quantity: </label>
                            <input type="number" name="quantity" min="0" max="5" value={selectedQuantity} onChange={handleSelectedQuantityChange}></input>
                        </div>
                        
                        <button className="form-item" onClick={handleAddShoeToCart}>
                            Add to Cart
                        </button>
                </div>
            </ShoeDetailContainer>

            <Link to = {"/"}>Back to shop</Link>
        </>
    )
}

export default ShoeDetails;