import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Aunty = ({ring}) => {
    const money = useContext(MoneyContext)
    return (
        <div>
            <h3>Aunty</h3>
            <p>grandpa money : {money}</p>
            <section className='flex'>
                <Cousin>HAbil</Cousin>
                <Cousin hasFriend={true} ring={ring}>Mabil</Cousin>
            </section>
        </div>
    );
};

export default Aunty;