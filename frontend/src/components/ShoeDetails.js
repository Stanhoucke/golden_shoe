import React from 'react';
import { Link } from 'react-router-dom';

const ShoeDetails = ({shoe, addToCart}) => {

    if (!shoe) {
        return <p>Loading...</p>
    }

    const shoeSizes = shoe.sizes.map((size, index) => {
        let sizeValue = Object.keys(size);
        return (
            <option key={index} value={sizeValue}>UK {sizeValue}</option>
        )
    })

    const handleAddShoeToCart = () => {
        const item = {
            "shoe": shoe,
            "size": "7",
            "quantity": 1,
            "price": 50.00
        }

        addToCart(item);
    }

    return(
        <>
            <h3>ShoeDetails</h3>
            <div className="shoe">
                    <p>{shoe.brand}</p>
                    <Link to = {"/shoes/" + shoe.id}>
                        {shoe.name}
                    </Link>
                    <select className="sizes">
                        {shoeSizes}
                    </select>
                    <button onClick={handleAddShoeToCart}>Add to Cart</button>
            </div>
            <Link to = {"/"}>Back to shop</Link>
        </>
    )
}

export default ShoeDetails;