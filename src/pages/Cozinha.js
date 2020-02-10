import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { StyleSheet, css } from 'aphrodite';
import Button from '../components/button'
import CardKitchen from '../components/cardKitchen';

function SeeOrder() {
    const [pendent, setPendent] = useState([]);


    useEffect(() => {
        db.collection('Pedidos')
            .onSnapshot((snapshot) => {
                const getOrder = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setPendent(getOrder);
            })
    });

    const deleteCard = (id, collection) => {
        db.collection(collection)
            .doc(id)
            .delete()
    }


    return (
        <main className={css(styles.main)}>
            {pendent.map((order) =>
                <CardKitchen key={order.id}>
                    <div className={css(styles.divKitchen)}>
                        <p>Nome: {order.clientName}</p>
                        <p>Mesa: {order.table}</p>
                        <h3>Pedidos:</h3>
                        {order.order.map(item => (
                            <p>{item.name}</p>
                        ))}
                        <p><b>Status:</b> {order.status}</p>
                        <p><b>Tempo:</b> {order.time}</p>
                        <Button className={css(styles.btnDelete)} onClick={(e) => (e.preventDefault(), deleteCard(order.id, 'Pedidos'))} children={'Pedido feito'} />
                    </div>
                </CardKitchen>

            )}
        </main>
    )
}

const styles = StyleSheet.create({
    main: {
        '@media (min-width: 1024px)': {
            width: '100%',
            display: 'flex',
            flexWrap:'wrap',
            flexDirection: 'row',
            alignContent: 'flex-start',
            alignItems: 'center',
        },
    },
    divKitchen: {
        margin: '0',
        padding: '0',
        height: 'inherit',

    },

    btnDelete: {
        display: 'flex',
        alignItems: 'baseline',
    }

});

export default SeeOrder;