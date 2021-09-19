import React from 'react';
import ShoesList from './ShoesList';

const Shoes = ({shoes, imgUrl}) => {
    if (shoes.length === 0){
        return (<p>Loading...</p>)
    }

    return(
        <>
            <h3>ALL SHOES</h3>

            <ShoesList shoes={shoes} imgUrl={imgUrl}/>
        </>
    )
}

export default Shoes;