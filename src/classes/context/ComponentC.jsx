import React from 'react';
import ComponentE from './ComponentE';
import { useContext } from 'react';
import {dataContext} from './ComponentA'

const ComponentC = () => {
  
  const userContext =  useContext(dataContext)
  console.log(userContext)
    const {dispatch,count} = userContext;
  return (
    <div>
      <h2 className='text-blue-700'>component c : second child of component A</h2>
     <h3>this is a goal</h3>
     <h4>count -- {count}</h4>

<button onClick = { 
  () => dispatch({type:'inc'})
}>+</button>
<button 
onClick = { 
  () => dispatch({type:'dec'})
}
>-</button>
<button 
onClick = { 
  () => dispatch({type:'res'})
}
>res</button>

<ComponentE />
    </div>
  );
}

export default ComponentC;
