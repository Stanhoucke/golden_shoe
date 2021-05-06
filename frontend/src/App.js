import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Shop from './containers/Shop';
import ShoeDetails from './components/ShoeDetails';
import Cart from './components/Cart';
import Request from './helpers/Request';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [shoes, setShoes] = useState([]);
  const [cart, setCart] = useState([]);

  const request = new Request();
  const imgUrl = "http://localhost:8080/api/getImages/"
  
  useEffect (() => {
    getShoes();
  }, [])
  
  const getShoes = () => {
    request.get("/api/shoes")
    .then(data => setShoes(data))
  }
  
  const postCartItems = (orders) => {
    request.post("/api/purchase_orders", orders)
    .then(() => window.location = "/")
  }

  const findShoeById = (id) => {
    return shoes.find((shoe) => {
      return shoe.id === id;
    })
  }

  const addToCart = (item) => {
    if (cart.length === 0){
      setCart((currentCart) => [...currentCart, item])
    } else {
      let foundDuplicate = false;
      for (const cartItem of cart) {
        if (cartItem.shoe.id === item.shoe.id && cartItem.size === item.size){
          cartItem.quantity += item.quantity;
          foundDuplicate = true;
        }
      }
  
      if (!foundDuplicate) {
        setCart((currentCart) => [...currentCart, item])
      }
    }

  };

  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === item.id);

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };

  const emptyCart = () => {
    setCart([])
  }

  const handleCheckout = () => {
    const orders = {
        "orders": cart
    }

    postCartItems(orders);
    emptyCart();

    getShoes();
}
  
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <div id="navbar-gap"></div>
        <Switch>
          <Route exact path="/cart" render={() => {
            return <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              handleCheckout={handleCheckout}
              imgUrl={imgUrl}/>
          }} />

          <Route exact path="/shoes/:id" render={(props) => {
            const id = props.match.params.id;
            const shoe = findShoeById(id);
            return <ShoeDetails 
              shoe={shoe}
              addToCart={addToCart}
              imgUrl={imgUrl} />
          }} />

          <Route render={() => {
            return <Shop shoes={shoes} imgUrl={imgUrl}/>
          }} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
