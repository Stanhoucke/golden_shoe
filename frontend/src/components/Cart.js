import React from 'react';
import ShoeDetails from './ShoeDetails';

const Cart = ({cart, removeFromCart, handleCheckout}) => {
    const listItemsInCart = () => cart.map((item, index) => (
      <div key={index}>
        ({item.quantity} x £{item.price.toFixed(2)}) {item.shoe.name} Size: {item.size}
        <button type="submit" onClick={() => removeFromCart(item)}>Remove</button>
      </div>
    ));

    const cartTotal = cart.reduce((total, item) => {
        return total + (item.price * item.quantity)
    },0);

    return(
        <>
            <h3>Cart</h3>
            <div>
                {listItemsInCart()}
            </div>
            <h3>£{cartTotal.toFixed(2)}</h3>
            <button onClick={handleCheckout}>Checkout</button>
        </>
    )
}

export default Cart;