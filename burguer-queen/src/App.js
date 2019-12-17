import React, { useState, useEffect } from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import { db } from './firebase.js';
import { checkPropTypes } from 'prop-types';
import Card from './componentes/Card/card';
import { StyleSheet, css } from 'aphrodite'
import Button from './componentes/Button/button';


function App() {

  const [dados, setDados] = useState([]);

  useEffect(() => {
    db.collection('Menu')
      .get()
      .then((snapshot) => {
        const banana = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        /* (console.log(doc.data())) */
        setDados(banana)
      });
  }, [0])
  console.log(dados);

 /*  const filterBreakfast = (event) => {
  const btn = event.target.className;
  const filter = (breakfast === true)? true:false; */

  }

  return (
    <>
      <div key={'banana'}>
        <Button
          name='btn'
          onClick={ filterBreakfast}
          children='enviar'
        />
        <Button
          name='btn'
          onClick={ filterBreakfast}
          children='enviar'
        />
      </div>
      <div key={dados.id}>{dados.map((item) =>

        <Card key={item.id}>{item.name}
          <br></br>
          R${item.price}</Card>

      )}

      </div>
    </>

  )
};

export default App;
