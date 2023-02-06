import React from 'react'
import {Link} from 'react-router-dom'


const url = "https://jsonplaceholder.typicode.com/users"

const Users = () => { 
const [users,setUsers] = React.useState([])
const [error,setError] = React.useState('')

React.useEffect(() => { 
  const getUsers = async () => { 
       try{ 
        const res = await fetch(url)
         const data = await res.json() 
         console.log(data)
         setUsers(data)
       }catch(err){ 
        setError(err.message)
       }
   }
   getUsers()
  },[])

  return( 
    <div>
        <div class="overflow-x-auto">
  <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
    <thead>
      <tr>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
      Name
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
         UserName
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
         Email
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
        Address
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
       Id
        </th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200">
      { 
         users?.map(user => ( 
          <tr key = {user.id}>
          <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
           {user.name}
          </td>
          <td class="whitespace-nowrap px-4 py-2 text-gray-700">{user.username}</td>
          <td class="whitespace-nowrap px-4 py-2 text-gray-700">{user.email}</td>
          <td class="whitespace-nowrap px-4 py-2 text-gray-700">{user.address.city}</td>
          <td class="whitespace-nowrap px-4 py-2 text-gray-700">
            <Link to= {`/users/${user.id}`}>
            {user.id}
            </Link>
            
        </td>
       
        </tr> 
         ))
      }    
    </tbody>
  </table>
</div>

      
    </div>
  )
}

export default Users
