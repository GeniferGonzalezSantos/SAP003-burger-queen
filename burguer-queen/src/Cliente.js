import React, { useState, useEffect } from 'react';
import { db } from './firebase.js';
import Card from './components/card';
//import { StyleSheet, css } from 'aphrodite'
import Button from './components/button';
import Input from './components/input';

function FazerPedido() {
  const [dados, setDados] = useState([]);
  const [item, setItem] = useState([]);
  const [table, setTable] = useState('');
  const [cliente, setCliente] = useState('');

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
    const showBreakfast = (seiLa === 'breakfast') ? true : false;
    const itens = dados.filter((lala) => lala.breakfast === showBreakfast)
    return setItem(itens)
  }
  console.log(item)

  return (
    <>
      <header key={'banana'}>
        <div>
          <Button
            id='breakfast'
            onClick={filterBreakfast}
            children='Manhã'
          /></div>
        <div>
          <Button
            id='btn'
            onClick={filterBreakfast}
            children='Tarde'
          />
        </div>
        <div>
          <Input placeholder='Mesa'
            onChange={(event) =>
              setTable(event.target.value)} />
          <p>{table}</p>
          <Input placeholder='Cliente'
            onChange={(event) =>
              setCliente(event.target.value)} />
          <p>{cliente}</p>
        </div>
      </header>
      <div key={dados.id}>{item.map((item) =>

        <Card
          key={item.id}
          onClick={() => console.log(item)}>
          {item.name}
          <div>
            R${item.price}
          </div>
        </Card>
       
      )}
      </div>
    </>

  )
}

export default FazerPedido;
