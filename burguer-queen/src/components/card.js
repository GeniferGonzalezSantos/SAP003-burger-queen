import React from 'react';
import { StyleSheet, css } from 'aphrodite'

const Card = (props) => (
    <>
    <section
    onClick={props.onClick}
    className={css(styles.card)}
    >{props.children}</section>
    </>
)

const styles = StyleSheet.create({
    card : {
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

export default Card;