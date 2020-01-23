import React, { useState, useEffect } from 'react';
import { db } from '../../firebase.js';
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
        setDados(getMenu)
      });
  }, [0])

  const filterMenu = (event) => {
    const idItem = event.target.id;
    const showMenu = (idItem === 'breakfast') ? true : false;
    const filterItens = dados.filter((itensMenu) => itensMenu.breakfast === showMenu)
    return setItem(filterItens)
  }


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

  const sendOrder = () => {
    db.collection('Pedidos')
      .add({
        clientName: cliente,
        table: table,
        order: order,
        status: 'Pendente',
        time: new Date ().toLocaleString('pt-BR')
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

  console.log(table)

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
              <Button onClick={() => selectOptions()}>Selecionar</Button>
            </div>
          </section>
        ) : false}
      </article>
      <aside className='aside'>
        <form className='container-aside'>
          <div className='input'>
            <Input
              placeholder='Cliente'
              onChange={(event) =>
                setCliente(event.target.value)} />
            <Input
              placeholder='Mesa'
              onChange={(event) =>
                setTable(event.target.value)} />
          </div>
          <div className='map' >
            {order.map(item => <p key={item.id}>
              {item.count} x {item.name}
              R$ {item.price}
              <button className='btn-map' onClick={(e) => (e.preventDefault(), deleteItem(item))} children={'X'} />
            </p>
            )}
          </div>
          <div className='div-enviar'>
            <p> Total: R$  {counter}  </p>
            <Button
              type='button' children='Enviar' onClick={(e) => (e.preventDefault(), sendOrder())}
            />
          </div>
        </form>
      </aside>
    </>
  )
}


export default TakeOrder;