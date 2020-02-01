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
        margin: '1%',
        padding: '1%',
        height: '10%',
        width: '15%',
        border: 'solid',
        borderRadius: '5px',
        borderColor: '#00B383',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        overflow: 'scroll',
    },

    p: {
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: '1em',
        justifyContent: 'space-around',
    }
});

export default CardKitchen;