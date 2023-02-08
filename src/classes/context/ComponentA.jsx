import React from 'react';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import { createContext } from 'react';

export const dataContext = createContext()

const ComponentA = () => {
    const users = [
        {
           name:'miracle',
           age:21,
           isFav:'rice',
           gender:'male'
        },
        {
            name:'daniel',
            age:11,
            isFav:'beans',
            gender:'female'
         },
    ]
  return (
    <div 
    className='text-center'
    >
      <h1  className='text-green-600 text-xl'>component A</h1>
   
   <dataContext.Provider  value={users}>
      <ComponentB user = {users}/>
      <ComponentC user = {users}/> 
    </dataContext.Provider>
    </div>
  );
}

export default ComponentA;
