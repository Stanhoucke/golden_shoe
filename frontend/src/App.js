import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Shop from './containers/Shop';
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

  return (
    <div className="App">
      <Router>
        <h1>Golden Shoe</h1>
        <Switch>

          <Route render={() => {
            return <Shop shoes={shoes}/>
          }} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
