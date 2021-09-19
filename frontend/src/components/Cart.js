import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CartStyle = styled.div`
    .table {
        margin: auto;
        border-spacing: 0;
        border-collapse: collapse;
        overflow: hidden;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        margin-bottom: 2em;
    }

    .table-header {
        background-color: darkred;
        color: white;
    }

    .table tbody tr:nth-of-type(even) {
        background-color: lightgray;
      }
    
    tfoot {
        border-top: solid;
        border-bottom: solid;
        border-color: black;
        border-width: 1px;
    }

    th, td {
        padding: 1em;
    }

    .table-image {
        width: 100px;
    }

    #checkout {
        padding: 2em;
    }
`;

const Cart = ({cart, removeFromCart, handleCheckout, imgUrl, total, handleEnterDiscountCode}) => {
    const listItemsInCart = () => cart.map((item, index) => (
      <tr key={index}>
        <td>
            <img className="table-image" src={imgUrl + item.shoe.imageUrls[0]} alt={item.shoe.brand + " " + item.shoe.name + " image"}/>
        </td>
        <td>{item.shoe.name} size: {item.size}</td>
        <td>{item.quantity}</td>
        <td>£{item.price.toFixed(2)}</td>
        <td>
            <button type="submit" onClick={() => removeFromCart(item)}>Remove</button>
        </td>
      </tr>
    ));

    if (cart.length === 0) {
        return(
            <>
                <h3>Your cart is empty</h3>
                <p>Once you add something to your cart - it will appear here. Ready to get started?</p>
                <Link to = {"/"}>Back to shop</Link>
            </>
        )
    }

    return(
        <CartStyle>
            <h3>SHOPPING CART</h3>
            <table className="table">
                <thead className="table-header">
                    <tr>
                        <th></th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {listItemsInCart()}
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <strong>TOTAL</strong>
                        </td>
                        <td></td>
                        <td></td>
                        <td>
                            <h3>£{total}</h3>
                        </td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>

            <label htmlFor="discount-code">Discount Code: </label>
            <input type="text" name="discount-code" placeholder="Enter Discount Code" onChange={handleEnterDiscountCode}></input>
            <div id="checkout">
                <button onClick={handleCheckout}>Checkout</button>
            </div>
        </CartStyle>
    )
}

export default Cart;