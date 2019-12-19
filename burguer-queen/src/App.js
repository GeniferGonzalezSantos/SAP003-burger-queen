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
  const [item, setItem] = useState([])

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


  const filterBreakfast = (event) => {
    const seiLa = event.target.id;
    const showBreakfast = (seiLa === 'breakfast')? true: false;
    const itens = dados.filter((lala) => lala.breakfast === showBreakfast)
    return setItem(itens)
  }
  console.log(item)

  return (
    <>
      <div key={'banana'}>
        <Button
          id='breakfast'
          onClick={filterBreakfast}
          children='breakfast'
        />
        <Button
          id='btn'
          onClick={filterBreakfast}
          children='resto do dia'
        />
      </div>
      <div key={dados.id}>{item.map((item) =>

        <Card key={item.id}>{item.name}
          <br></br>
          R${item.price}</Card>

      )}

      </div>
    </>

  )
}
export default App;
