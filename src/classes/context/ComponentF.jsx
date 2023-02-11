import React from 'react';
import { useContext } from 'react';
import {dataContext} from './ComponentA'

const ComponentF = () => {
    const userContext =  useContext(dataContext)
    console.log(userContext)
      const {users,dispatch,count} = userContext;
  return (
    <div>
      <h4 className = 'text-yellow-700'>component F : first greatgrandchild of component A</h4>
      <a href="#" class="block">
  <img
    alt="Art"
    src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    class="h-96 w-full object-cover"
  />

  <h3 class="mt-4 text-xl font-bold text-gray-900">Name : {users[1].name}</h3>

  <p class="mt-2 max-w-sm text-gray-700">
    Gender:  {users[1].gender}
  </p>
  <p class="mt-2 max-w-sm text-gray-700">
    IsFav:  {users[1].isFav}
  </p>
  <p class="mt-2 max-w-sm text-gray-700">
    Age:  {users[1].age}
  </p>
</a>

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
    </div>
  );
}

export default ComponentF;
