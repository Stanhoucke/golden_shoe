import React from 'react';
import { Link } from 'react-router-dom';

const ShoeDetails = ({shoe}) => {

    if (!shoe) {
        return <p>Loading...</p>
    }

    const shoeSizes = shoe.sizes.map((size, index) => {
        let sizeValue = Object.keys(size);
        return (
            <option key={index} value={sizeValue}>UK {sizeValue}</option>
        )
    })

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
            </div>
            <Link to = {"/"}>Back to shop</Link>
        </>
    )
}

export default ShoeDetails;