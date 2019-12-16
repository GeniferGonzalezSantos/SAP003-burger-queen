import React, { useState } from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import { db } from './firebase.js';

function App() {
  const [dados, setDados] = useState([]);
  db.collection('Menu')
    .get()
    .then((snapshot) => {
      const banana = snapshot.docs.map((doc) => ({
        ...doc.data()
      }))
      /* (console.log(doc.data())) */
      setDados(banana)
    });

  return (
    <>
      <div>{dados.map((item) =>
        <div>
          <br></br>
          {item.name}
          <br></br>
          R${item.price}
        </div>
      )}
      </div>
    </>



    /* <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      >
      Learn React
    </a>
  </header>
</div> */

  )
};
export default App;
