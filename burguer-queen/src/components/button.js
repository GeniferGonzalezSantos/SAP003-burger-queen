import React from 'react';
import { StyleSheet, css } from 'aphrodite';



const Button = (props) => (
    <>
        <button onClick={props.onClick} className={css(styles.btn)} id={props.id}>{props.children}</button>
    </>
)
const styles = StyleSheet.create({
    btn: {
        margin: '1% 1% 1% 7%',
        padding: '5px',
        border: '1px solid',
        borderRadius: '5px',
        borderColor: '#00B383',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        fontSize: '1em',
        backgroundColor: '#00B383',
        color: '#c5350d',
    },


});

export default Button;