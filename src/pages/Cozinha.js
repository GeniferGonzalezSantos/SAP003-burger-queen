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
        <main>
            {pendent.map((order) =>
                <div className={css(styles.directionCard)}>
                    <CardKitchen key={order.id}>
                        <div>
                            <p>Nome: {order.clientName}</p>
                            <p>Mesa: {order.table}</p>
                            <h3>Pedidos:</h3>
                            {order.order.map(item => (
                                <p>{item.name}</p>
                            ))}
                            <p>Status: {order.status}
                            </p>
                               <p>Tempo: {order.time}</p>

                        </div>
                    </CardKitchen>
                </div>
            )}
        </main>
    )
}

const styles = StyleSheet.create({

    directionCard: {
        display: 'flex',
        flexFlow: 'row-wrap',
        flexGrow: '1',
        margin: '0',
    },
   
});

export default SeeOrder;