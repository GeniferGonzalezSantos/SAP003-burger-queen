import React, { useState, useEffect } from 'react';
import { db } from '../../firebase.js';
import firebase from 'firebase/app';
import Card from '../card';
import Button from '../button';
import Input from '../input';
import './Cliente.css';

function TakeOrder() {
  const [dados, setDados] = useState([]);
  const [item, setItem] = useState([]);
  const [table, setTable] = useState('');
  const [cliente, setCliente] = useState('');
  const [order, setOrder] = useState([]);
  const [counter, setCounter] = useState(0);
 

  useEffect(() => {
    db.collection('Menu')
      .get()
      .then((snapshot) => {
        const getMenu = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        // (console.log(doc.data())) 
        setDados(getMenu)
      });
  }, [0])

  const filterMenu = (event) => {
    const idItem = event.target.id;
    //console.log(idItem);
    const showMenu = (idItem === 'breakfast') ? true : false;
    const filterItens = dados.filter((itensMenu) => itensMenu.breakfast === showMenu)
    return setItem(filterItens)
  }
  //console.log(item); 

  const showOrder = (item) => {
    if (order.includes(item)) {
      item.count++;
      setCounter(+(counter + item.price * item.count));
    } else {
      item.count = 1;
      setOrder([...order, item]);
    }
    setCounter(+(counter + item.price));
  }

  const deleteItem = (item) => {
    if (item.count === 1) {
      const delPrice = counter - item.price;
      const itemIndex = order.indexOf(item);
      order.splice(itemIndex, 1);
      setOrder([...order]);
      setCounter(delPrice);
    } else {
      item.count--;
      const delPrice = counter - item.price;
      setCounter(delPrice);
    }
  }
   /*  setCounter(counter + item.price);  
    const addItem = (item.id * '') ? true : false;
    const multiplication = item.price * addItem;
    return console.log(setCounter + multiplication); */

  const sendOrder = () => {
    db.collection('Pedidos')
      .add({
        clientName: cliente,
        table: table,
        order: order,
        //bill: bill,
        status: 'Pendente',
        time: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        setOrder([]);
        setTable(['']);
        setCliente(['']);
        setCounter(0);
      })
    console.log('Enviado')
  }


  return (
    <>
      <main>
        <div key={'itensMenu'} className='btn'>
          <Button
            id='breakfast'
            onClick={filterMenu}
            children='Manhã'
          />
          <Button
            id='btn'
            onClick={filterMenu}
            children='Tarde'
          />
        </div>
      </main>
      <article >
        <div key={dados.id} className='card-container'>
          {item.map((item) =>
            <Card
              key={item.id}
              onClick={() => showOrder(item)}>
              <div className='card'>
                {item.name}
              </div>
              <div className='card'>
                R${item.price}
              </div>
              <div>
                {item.options ?
                 (item.options.map(options =>
                  <p>{options}</p>))
                : null 
                }
                  
              </div>
            </Card>
          )}
        </div>
      </article>
      <aside className='aside'>
        <form className='container-aside'>
          <div className='input'>
            <div >
              {order.map(item => <p key={item.id}>
                {item.count}x{item.name}
                R${item.price}
                <Button onClick={(e) => (e.preventDefault(), deleteItem(item))} children={'X'} />
              </p>
              )}
              <p> Total: R$  {counter}  </p>
            </div>
            <Input
              placeholder='Cliente'
              onChange={(event) =>
                setCliente(event.target.value)} />
            <Input
              placeholder='Mesa'
              onChange={(event) =>
                setTable(event.target.value)} />
            <p className='p'>{cliente}</p>
            <p className='p'>{table}</p>
            <Button
              type='button' children='Enviar' onClick={sendOrder} />
          </div>
        </form>
      </aside>
    </>
  )
}


export default TakeOrder;
