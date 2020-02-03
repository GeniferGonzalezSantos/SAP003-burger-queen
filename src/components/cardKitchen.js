import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const CardKitchen = (props) => (
    <section
        onClick={props.onClick}
        className={css(styles.cardKitchen, styles.p)}>
        {props.children}</section>

)

const styles = StyleSheet.create({

    cardKitchen: {
        '@media (min-width: 1024px)': {
        margin: '2%',
        padding: '1%',
        width: '18vw',
        height: '18vh',
        border: 'solid',
        borderRadius: '5px',
        borderColor: '#00B383',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        overflow: 'scroll',
        }
    },

    p: {
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: '.8em',
        justifyContent: 'space-around',
    },
});

export default CardKitchen;