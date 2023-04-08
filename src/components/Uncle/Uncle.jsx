import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money,setMoney] = useContext(MoneyContext)

    return (
        <div>
            <h3>Uncle</h3>
            <p>grandpa money :{money} </p>
            <button onClick={()=>setMoney(money +1000)} >sent 1000tk</button>
            <section className='flex'>
                <Cousin>Nibil</Cousin>
                <Cousin>Abil</Cousin>
            </section>
        </div>
    );
};

export default Uncle;