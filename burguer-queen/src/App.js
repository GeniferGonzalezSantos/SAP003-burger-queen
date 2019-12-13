import React, { useState } from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import {db} from './firebase.js';

function App() {
  const [dados, setDados] = useState('');
   db.collection('Menu')
  .get()
  .then((querySnapshot) => {
    const banana = querySnapshot.forEach(doc => { 
      (doc.data()) 
    })
    setDados(banana)
  })
    return (
      <div>
        <button onClick={() => setDados}> dados</button>
        <div>{dados.map((lala) => 
      <div key={lala.id}>{lala.price}</div>
        )}
        </div>
        </div> 


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
  );
    }


export default App;
