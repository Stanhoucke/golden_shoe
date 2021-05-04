import React from 'react';

const Cart = ({cart, removeFromCart, postCartItems, emptyCart}) => {
  
    const listItemsInCart = () => cart.map((item, index) => (
      <div key={index}>
        ({item.quantity} x £{item.price}) {item.shoe.name}
        <button type="submit" onClick={() => removeFromCart(item)}>Remove</button>
      </div>
    ));

    const cartTotal = cart.reduce((total, { price = 0 }) => {
        return total + price
    }, 0);

    const handleCheckout = () => {
        const orders = {
            "orders": cart
        }

        postCartItems(orders);
        emptyCart();
    }

    return(
        <>
            <h3>Cart</h3>
            <div>
                {listItemsInCart()}
            </div>
            <h3>£{cartTotal}</h3>
            <button onClick={handleCheckout}>Checkout</button>
        </>
    )
}

export default Cart;