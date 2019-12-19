import React from 'react';


const Button = (props) => (
    <>
    <button onClick={props.onClick} className={props.name} id={props.id}>{props.children}</button>
    </>
)
 export default Button;