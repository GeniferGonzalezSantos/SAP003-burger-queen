import React from 'react';
import './card.css';

const Card = (props) => (
    <>
    <p className='card'>{props.children}</p>
    </>
)
 export default Card;