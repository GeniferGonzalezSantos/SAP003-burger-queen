import React, { useState, useEffect } from 'react';
import { db } from '../../firebase.js';
import firebase from 'firebase/app';
import Card from '../card';
import Button from '../button';
import Modal from '../modal';
import Input from '../input';
import './Cliente.css';


function TakeOrder() {
  const [dados, setDados] = useState([]);
  const [item, setItem] = useState([]);
  const [table, setTable] = useState('');
  const [cliente, setCliente] = useState('');
  const [order, setOrder] = useState([]);
  const [counter, setCounter] = useState(0);
  const [modal, setModal] = useState({ status: false });
  const [options, setOptions] = useState('');
  const [extras, setExtras] = useState('');

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

  const selectOptions = () => {
    if (extras !== '') {
      const upDateModal = {
        ...modal.item,
        price: modal.item.price + 1,
        name: `${modal.item.name} ${options}`
      }
      showOrder(upDateModal);
      setModal({ status: false });
    } else {
      const upDateModal = {
        ...modal.item,
        name: `${modal.item.name} ${options}`
      }
      showOrder(upDateModal);
      setModal({ status: false });
    }
  }

  const verifyOptions = (item) => {
    if (item.options) {
      setModal({ status: true, item: item })
    } else {
      showOrder(item);
    }

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
      <article className='article' >
        <div key={dados.id} className='card-container'>
          {item.map((item) =>
            <Card
              key={item.id}
              onClick={() => verifyOptions(item)}
            >
              <div className='card'>
                {item.name}
              </div>
              <div className='card'>
                R${item.price}
              </div>
            </Card>
          )}
        </div>
        {modal.status ? (
          <section className='s-options'>
            <div>
              <h3>Opções</h3>
              {modal.item.options.map((element, index) =>
                <div key={index}>
                  <Input type='radio' name='options' value={element} onClick={() => setOptions(element)} />
                  <label>{element}</label>
                </div>
              )}
            </div>
            <div>
              <h3>Extras</h3>
              {modal.item.extras.map((element, index) =>
                <div key={index}>
                  <Input type='radio' name='extras' value={element} onClick={() => setExtras(element)} />
                  <label>{element}</label>
                </div>
              )}
              <Button  onClick={() => selectOptions()} title='Enviar' className='btn-options' />
            </div>
          </section>
        ) : false}
      </article>
      <aside className='aside'>
        <form className='container-aside'>
          <div className='input'>
            <div className='map' >
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