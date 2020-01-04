import React from 'react';
import { StyleSheet, css } from 'aphrodite'

const Card = (props) => (
    <>
    <section
    onClick={props.onClick}
    className={css(styles.card)}>{props.children}</section>
    </>
)

const styles = StyleSheet.create({
    card : {
       margin: '2%',
       padding: '2%',
       height: '25%',
       width:'15%',
       border: '2px outset',
       borderRadius:'10%',
       borderColor: '#00B383',
       display:'flex',
       alignItems:'center',
       justifyContent:'space-around',
       marginLeft:'3%'
       
    },

    focus: {
      ':focus': { 
        height: '120px',
        transition:'height 1s'
      },

    div: {
      flexDirection: 'column'
      }
  }
});

export default Card;