import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';
import Shop from './containers/Shop';
import ShoeDetails from './components/ShoeDetails';
import Cart from './components/Cart';
import Request from './helpers/Request';

function App() {
  const [shoes, setShoes] = useState([]);
  const [cart, setCart] = useState([]);

  const request = new Request();
  
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
    setCart((currentCart) => [...currentCart, item])
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
  
  return (
    <div className="App">
      <Router>
        <h1>Golden Shoe</h1>
        <Link to = {"/cart"}>View cart</Link>
        <Link to = {"/"}>Back to shop</Link>
        <Switch>
          <Route exact path="/cart" render={() => {
            return <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              postCartItems={postCartItems}
              emptyCart={emptyCart}/>
          }} />

          <Route exact path="/shoes/:id" render={(props) => {
            const id = props.match.params.id;
            const shoe = findShoeById(id);
            return <ShoeDetails 
              shoe={shoe}
              addToCart={addToCart} />
          }} />

          <Route render={() => {
            return <Shop shoes={shoes}/>
          }} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
