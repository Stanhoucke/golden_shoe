import React from 'react';
import { Link } from 'react-router-dom';
import ShoeDetails from '../components/ShoeDetails';

const Shop = ({shoes}) => {

    if (shoes.length === 0){
        return (<p>Loading...</p>)
    }

    const shoesList = shoes.map((shoe, index) => {
        return (
            <li key={shoe.id} className="shoe-item">
                <div className="shoe">
                    <p>{shoe.brand}</p>
                    <Link>
                        {shoe.name}
                    </Link>
                </div>

            </li>
        )
    })

    return(
        <>
            <h3>Shop</h3>
            <ul className="shoes-list">
                {shoesList}
            </ul>
            <ShoeDetails/>
        </>
    )
}

export default Shop;