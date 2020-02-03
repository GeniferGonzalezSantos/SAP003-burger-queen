import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { StyleSheet, css } from 'aphrodite';
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
                    </div>
                </CardKitchen>

            )}
        </main>
    )
}

const styles = StyleSheet.create({
    main: {
        '@media (min-width: 1024px)': {
            height: '30%',
            display: 'flex',
            flexFlow: 'row wrap',
            flexGrow: '1',
            alignContent: 'flex-start',
            overflowY: 'scroll',
        },
        divKitchen: {
            margin:'0',
            padding:'0',
        }
    },

});

export default SeeOrder;