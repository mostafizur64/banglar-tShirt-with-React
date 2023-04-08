import React, { createContext, useState } from 'react';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import './Grandpa.css';
 
export const RingContext = createContext('gold')
export const MoneyContext = createContext(0)
const Grandpa = () => {
    const [money , setMoney] = useState(0)
    const ring = 'daimond'
    return (
        <div className='grandpa'>
          <h3>Grand pa</h3>
            <p>grandpa money: {money}</p>

           <MoneyContext.Provider value={[money,setMoney]}>
           <RingContext.Provider value='golden Ring'>
                <section className='flex'>
                    <Father ring={ring}> </Father>
                    <Uncle></Uncle>
                    <Aunty ring={ring}></Aunty>
                </section>
            </RingContext.Provider>
           </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;


/**
 * create a context and export
 * create a provider and pass the value
 * use context to receive
 */