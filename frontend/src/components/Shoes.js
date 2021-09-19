import React, { useContext } from 'react';
import { ShoeContext } from '../context/ShoeContext';
import ShoesList from './ShoesList';

const Shoes = ({imgUrl}) => {
    const {shoes} = useContext(ShoeContext);
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