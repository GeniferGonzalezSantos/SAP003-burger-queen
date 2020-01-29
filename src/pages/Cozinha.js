import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import Card from '../components/card';

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
            
                <Card >
                    <div className='card'>
                    key={order.id}
                    clientName={order.clientName}
                    table={order.table}
                    order={order.order.map(item => (
                        <p>{item.name}</p>
                    ))}
                    status={order.status}
                    time={order.time}
                    </div>
               </Card>
               )}


        </main>
    )
}
export default SeeOrder;