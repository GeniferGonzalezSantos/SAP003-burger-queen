import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const Input = (props) => (
   <>
      <input
         type={props.type}
         onClick={props.onClick}
         className={css(styles.input)}
         name={props.name}
         placeholder={props.placeholder}
         title={props.title} />
   </>
)

const styles = StyleSheet.create({

   input: {
      margin: '2%',
      padding: '5px',
      border: 'none',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

   },

});

export default Input;