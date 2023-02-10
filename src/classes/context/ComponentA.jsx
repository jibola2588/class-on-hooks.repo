import React from 'react';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import { createContext,useReducer,useState } from 'react';

export const dataContext = createContext()

const initialState = 0;

const reducer = (state = initialState,action) => { 
  switch(action.type){ 
      case 'inc':
        return state + 1
          break;
      case 'dec':
        return state -1;
      case 'res':
        return initialState
      default : 
      return state
  }
}
   
const ComponentA = () => {
   const [count,dispatch] =  useReducer(reducer,initialState)

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
    <h3>count : {count} </h3>
   <dataContext.Provider  value={{users,dispatch,count}}>
      <ComponentB user = {users}/>
      <ComponentC user = {users}/> 
    </dataContext.Provider>
    </div>
  );
}

export default ComponentA;
