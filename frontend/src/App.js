import React, { useEffect, useState } from 'react';
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
      <h1>Golden Shoe</h1>
      <Shop/>
    </div>
  );
}

export default App;
