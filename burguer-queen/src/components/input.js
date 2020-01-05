import React from 'react';
import { StyleSheet, css } from 'aphrodite'


const Input = (props) => (
   <>
      <input
         type={props.type}
         onChange={props.onChange}
         className={css(styles.input)} placeholder={props.placeholder}></input>
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