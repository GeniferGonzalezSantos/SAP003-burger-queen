import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Modal = (props) => (
<div className={props.container}>
    <div className={props.modal}>
        <h3>Extras</h3>
         
        <form>
        <input type={props.radio}></input>
        <h3>Opções</h3>
       
        <input type={props.radio}></input>
        <input typer={props.button}>Selecionar</input>
        </form>
    </div>
</div>
)

const styles = StyleSheet.create({
    Modal : {
       margin: '2%',
       padding: '2%',
       height: '15%',
       width:'20%',
       border: 'solid',
       borderRadius:'5px',
       borderColor: '#00B383',
       display:'flex',
       alignItems:'center',
       justifyContent:'space-around',
       fontFamily: 'Ubuntu, sans-serif',
       fontSize:'1em',
       
   
    },
});

export default Modal;