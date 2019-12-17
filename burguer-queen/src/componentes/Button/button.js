import React from 'react';


const Button = (props) => (
    <>
    <button onClick={props.onClick} className={props.name}>{props.children}</button>
    </>
)
 export default Button;