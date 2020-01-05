import React, { useState, useEffect } from 'react';
import { db } from '../../firebase.js';
import Card from '../card';
import Button from '../button';
import Input from '../input';
import './Cliente.css';

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
      <main>
        <div key={'banana'} className='btn'>
          <Button
            id='breakfast'
            onClick={filterBreakfast}
            children='Manhã'
          />
          <Button
            id='btn'
            onClick={filterBreakfast}
            children='Tarde'
          />
        </div>
      </main>
      <article>
        <div key={dados.id}>
          {item.map((item) =>
            <Card
              key={item.id}
              onClick={() => console.log(item)}>
              <div>
                {item.name}
              </div>
              <div>
                R${item.price}
              </div>
            </Card>
          )}
        </div>
      </article>
      <aside className='aside'>
        <form className='container-aside'>
          <div className='input'>
            <Input
              placeholder='Cliente'
              onChange={(event) =>
                setCliente(event.target.value)} />
            <p className='p'>{cliente}</p>
          </div>
          <div className='input'>
            <Input
              placeholder='Mesa'
              onChange={(event) =>
                setTable(event.target.value)} />
            <p className='p'>{table}</p>
          </div>
          <Input 
          type='submit'/>
        </form>
      </aside>
    </>
  )
}
export default FazerPedido;
