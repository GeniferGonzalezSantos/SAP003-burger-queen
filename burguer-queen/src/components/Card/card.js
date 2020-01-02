import React from 'react';
import { StyleSheet, css } from 'aphrodite'

const Card = (props) => (
    <>
    <p className='card'>{props.children}</p>
    </>
)

StyleSheet.create({
    Card: {
      backgroundColor: '#ffe0b2',
      margin: '2vh',
      height: '15vh',
      width: '40vh',
      borderRadius: 5,
      border: 'none'
    }
});

export default Card;