import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Shop from './containers/Shop';
import ShoeDetails from './components/ShoeDetails';
import Request from './helpers/Request';

function App() {
  const [shoes, setShoes] = useState([]);

  const request = new Request();

  useEffect (() => {
    getShoes();
  }, [])

  const getShoes = () => {
    request.get("/api/shoes")
    .then(data => setShoes(data))
  }

  const findShoeById = (id) => {
    return shoes.find((shoe) => {
      return shoe.id === id;
    })
  }

  return (
    <div className="App">
      <Router>
        <h1>Golden Shoe</h1>
        <Switch>
          <Route exact path="/shoes/:id" render={(props) => {
            const id = props.match.params.id;
            const shoe = findShoeById(id);
            return <ShoeDetails shoe={shoe}/>
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
