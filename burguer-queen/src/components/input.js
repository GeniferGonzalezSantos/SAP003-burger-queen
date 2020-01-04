import React from 'react';
import { StyleSheet, css } from 'aphrodite'


const Input = (props) => (
    <>
    <input
    onChange={props.onChange}
     className={css(styles.input)} placeholder = {props.placeholder}></input>
    </>
)

 const styles = StyleSheet.create({
   input:{
    margin: '1%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
   }
});
 
export default Input;