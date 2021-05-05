import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShoeDetails = ({shoe, addToCart}) => {
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
            <div className="shoe">
                    <p>{shoe.brand}</p>
                    <Link to = {"/shoes/" + shoe.id}>
                        {shoe.name}
                    </Link>
            </div>

            <div className="shoe-form">
                    <select className="sizes" value={selectedSize} onChange={handleSelectedSizeChange}>
                        <option value="" disabled hidden>Choose a size</option>
                        {shoeSizes}
                    </select>

                    <label htmlFor="quantity">Quantity: </label>
                    <input type="number" name="quantity" min="0" max="5" value={selectedQuantity} onChange={handleSelectedQuantityChange}></input>
                    
                    <button onClick={handleAddShoeToCart}>
                        Add to Cart
                    </button>
            </div>

            <Link to = {"/"}>Back to shop</Link>
        </>
    )
}

export default ShoeDetails;