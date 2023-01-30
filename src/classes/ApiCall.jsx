import React,{useState,useEffect} from 'react';

const url = 'https://randomuser.me/api'
 
export const ApiCalls = () => {
    const [user,setUser] = useState([])
   
    // const AbortController = new Controller()

    useEffect(

      () => {
      fetch(url)
      .then(res => res.json())
      .then(data => {
        setUser(data.results)
      })
      .catch(err => console.log(err.message))
    },

    [])

  return (
    <div>
       { 
       user.map(person => ( 
          <div key = {person.login.uuid}>
             <h3>Title : {person.name.title}</h3>
             <h3> First Name: {person.name.first}</h3>
             <h3> Last Name: {person.name.last}</h3>
         </div>
       ))
       }
    </div>
  );
}