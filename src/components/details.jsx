import {useParams,useNavigate} from 'react-router-dom'
import React from 'react'

const Details = () => {  
   const navigate = useNavigate()
  const {id} = useParams()
  console.log(id)

  const [user,setUser] = React.useState({})

  React.useEffect(() => { 
    const getAUser = async() => { 
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await res.json()
        console.log(data)
        setUser(data)
    }
    getAUser()
  },[])
     return ( 
        <div>
            <a href="#" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
  <img
    alt="Home"
    src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-56 w-full rounded-md object-cover"
  />

  <div class="mt-2 flex justify-between">
       <div>
       <h3>{user?.name}</h3>
       <p>{user?.email}</p>
       <p>{user?.website}</p>
       </div>
      <div>
      <p>{user?.phone}</p>
      <p>{user?.address?.city}</p>
      <p>{user?.company?.name}</p>
      </div>
    </div>
</a>
<button 
className = "ml-2"
onClick = { () => navigate('/users')}
>Go back</button>
</div>
    )
}

export default Details