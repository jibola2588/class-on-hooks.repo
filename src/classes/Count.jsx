import React,{useState,useEffect} from 'react';
import { ApiCalls } from './ApiCall';


const Count = () => {
    const [count,setCount] = useState(0)
    const [
      display,setDisplay] = useState(false)


    useEffect(() =>
     {
         setCount(count + 1)

         return () => {console.log('count has unmounted')} 

         return () => {
            setCount(0)
         }
    },
     []);

     

  return (
    <div>
      <p 
      className='text-3xl'
      >count : { count }</p>
      <button 
      // onClick = { () =>setCount(count + 1)}
      className='p-4 text-2xl'></button>

        

      <button
      className='border border-gray-600 px-4 py-2'
     onClick={() => setDisplay(!display)}
     >made api call</button>

    { display && <ApiCalls />}
    </div>
  );
}





export default Count;


