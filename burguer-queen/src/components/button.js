import React from 'react';
import { StyleSheet, css } from 'aphrodite';



const Button = (props) => (
    <>
    <button onClick={props.onClick} className={css(styles.btn)} id={props.id}>{props.children}</button>
    </>
)
const styles = StyleSheet.create({
    btn : {
       margin: '2%',
       padding:'2%',
        border: '1px solid',
       borderRadius:'5%',
       borderColor: '#00B383',
       display:'flex',
       alignItems:'center', 
       justifyContent:'space-around',
       fontSize: '1em',
       

      

    },

    div: {
        flexDirection: 'column'

      }
});

 export default Button;