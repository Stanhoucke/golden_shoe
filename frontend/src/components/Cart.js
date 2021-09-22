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

    .price-col {
        text-align: right;
    }

    .subtotal-end {
        border-bottom: solid;
        border-color: black;
        border-width: 1px;
    }

    .discount-code-success-input {
        border: solid;
        border-radius: 5%;
        border-color: green;
        color: green;
    }
    
    .check-mark {
        color: green;
    }
`;

const Cart = ({cart, removeFromCart, handleCheckout, imgUrl, total, handleEnterDiscountCode, discount}) => {
    const listItemsInCart = () => cart.map((item, index) => (
      <tr key={index}>
        <td>
            <img className="table-image" src={imgUrl + item.shoe.imageUrls[0]} alt={item.shoe.brand + " " + item.shoe.name + " image"}/>
        </td>
        <td>{item.shoe.name} size: {item.size}</td>
        <td>{item.quantity}</td>
        <td className="price-col">£{item.price.toFixed(2)}</td>
        <td>
            <button type="submit" onClick={() => removeFromCart(item)}>Remove</button>
        </td>
      </tr>
    ));

    const displayTotal = () => {
        if (!discount) {
            return (
                <tr>
                    <td><strong>TOTAL</strong></td>
                    <td colSpan="2"></td>
                    <td className="price-col">
                        <h3>£{total.toFixed(2)}</h3>
                    </td>
                    <td></td>
                </tr>
            ) 
        } else {
            return (
                <>
                    <tr>
                        <td>Sub-total</td>
                        <td colSpan="2"></td>
                        <td className="price-col">£{total.toFixed(2)}</td>
                        <td></td>
                    </tr>
                    <tr className="subtotal-end">
                        <td>Discount</td>
                        <td colSpan="2"></td>
                        <td className="price-col">- £{(Math.round(discount.percentageDiscount * total)).toFixed(2)}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><strong>TOTAL</strong></td>
                        <td colSpan="2"></td>
                        <td className="price-col">
                            <h3>£{(total - (Math.round((discount.percentageDiscount * total)))).toFixed(2)}</h3>
                        </td>
                        <td></td>
                    </tr>
                </>
            )
        }
    }
    

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
                    {displayTotal()}
                </tfoot>
            </table>

            <label htmlFor="discount-code">Discount Code: </label>
            <input className={discount ? "discount-code-success-input" : ""} type="text" name="discount-code" placeholder="Enter Discount Code" onChange={handleEnterDiscountCode}></input>
            {discount ? <span className="check-mark"> &#10004;</span> : <></>}
            <div id="checkout">
                <button onClick={handleCheckout}>Checkout</button>
            </div>
        </CartStyle>
    )
}

export default Cart;