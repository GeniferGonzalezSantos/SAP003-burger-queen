import React from 'react';
import { StyleSheet, css } from 'aphrodite'

const Order = (props) => (
    <>
    <section
    onClick={props.onClick}
    className={css(styles.order)}></section>
    </>
)

const styles = StyleSheet.create({
    order : {
       margin: '20px',
       padding: '10px',
       height: '110px',
       width:'150px',
       border: 'solid',
       borderRadius:'25%',
       borderColor: 'black',
       display:'flex',
       alignItems:'center',
       justifyContent:'space-around',
       marginLeft:'5px'
       
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

export default Order;