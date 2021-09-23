import React, { useContext, useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Shop from './containers/Shop';
import ShoeDetails from './components/ShoeDetails';
import Cart from './components/Cart';
import Request from './helpers/Request';
import NavBar from './components/NavBar/NavBar';
import Help from './components/Help';
import Shoes from './components/Shoes';
import { ShoeContext } from './context/ShoeContext';
import ErrorPage from './components/ErrorPage';
import Alert from './components/Alert';

function App() {
  const history = useHistory();
  const {shoes, fetchShoes} = useContext(ShoeContext);
  const [discounts, setDiscounts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetchDiscounts();
  }, [])
  
  useEffect(() => {
    if (discountCode.length > 5){
      findDiscountByInputCode();
    }
  }, [discountCode])

  useEffect(() => {
    const total = [...cart].reduce((total, { price, quantity }) => {
      return (total += quantity * price);
    }, 0);

    setTotal(parseFloat(total.toFixed(2)));
  }, [cart]);

  const request = new Request();
  const imgUrl = "http://localhost:8080/api/getImages/"

  const fetchDiscounts = () => {
    request.get("/api/discounts")
        .then(data => {
          const availableDiscounts = data.filter((discount) => {
            return !discount.expired;
            });
          setDiscounts(availableDiscounts)
        })
  }
  
  const postCartItems = (orders) => {
    request.post("/api/purchase_orders", orders)
    .then(() => {
      fetchShoes();
      history.push("/")
    })
  }

  const findShoeById = (id) => {
    return shoes.find((shoe) => {
      return shoe.id === id;
    })
  }

  const findDiscountByInputCode = () => {
    setAppliedDiscount(discounts.find((discount) => {
      return discount.name === discountCode;
    }))
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
      } else {
        setErrorMessage(`Removed ${item.shoe.name} from cart.`);
        return [
          ...currentCart.slice(0, indexOfItemToRemove),
          ...currentCart.slice(indexOfItemToRemove + 1),
        ];
      }

    });
  };

  const emptyCart = () => {
    setCart([])
  }

  const handleEnterDiscountCode = (event) => {
    setDiscountCode(event.target.value);
}

  const handleCheckout = () => {
    let orders;
    appliedDiscount === undefined ? 
    orders = {
      "orders": cart,
      "total": total,
     }
     :
      orders = {
        "orders": cart,
        "total": total,
        "discount": appliedDiscount
    };

    try {
      postCartItems(orders);
      emptyCart();
      setErrorMessage("Thank you, your order has been processed successfully.");
    } catch (error) {
      setErrorMessage(error.message);
    }
}
  
  return (
    <div className="App">
        <NavBar cartSize={cart.length}/>
        <div id="navbar-gap"></div>
        <Switch>
          <Route exact path="/help" render={() => {
            return <Help/>
          }} />

          <Route exact path="/cart" render={() => {
            return <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              handleCheckout={handleCheckout}
              imgUrl={imgUrl}
              total={total}
              handleEnterDiscountCode={handleEnterDiscountCode}
              discount={appliedDiscount}/>
          }} />

          <Route exact path="/shoes/:id" render={(props) => {
            const id = props.match.params.id;
            const shoe = findShoeById(id);
            return <ShoeDetails 
              shoe={shoe}
              addToCart={addToCart}
              imgUrl={imgUrl}
              setErrorMessage={setErrorMessage} />
          }} />

          <Route exact path="/shoes" render={() => {
            return <Shoes
              // shoes={shoes}
              imgUrl={imgUrl} />
          }} />

          <Route exact path = "/" render={() => {
            return <Shop
              imgUrl={imgUrl}/>
          }} />
          <Route path = "*">
            <ErrorPage/>
          </Route>
        </Switch>
        <Alert errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>

    </div>
  );
}

export default App;
