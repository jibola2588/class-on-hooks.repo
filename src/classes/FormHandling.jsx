import React,{useState} from 'react';

const FormHandling = () => {
    const [user,setUser] = useState({
        email:'',
        firstName:'',
        lastName:''
    })

    const handleSubmit = e => { 
        e.preventDefault();
       console.log(user);
    }
  return (
    <div className='max-w-lg w-full mx-auto p-4 border border-gray-500'>
      <form 
         onSubmit = {handleSubmit}
      >
          <div className='flex flex-col space-y-4'>
              <>
              <label htmlFor="" className="text-sm">first name</label>
                <input type="text" 
                value={user.firstName}
                onChange = { e => setUser({
                  firstName:e.target.value
                })}
                className="border border-indigo-400 py-2 px-4" />
              </>
              <>
              <label htmlFor="" className="text-sm">last name</label>
                <input 
                 
                 value={user.lastName}
                 onChange = { e => setUser({
                    ...user,
                   lastName:e.target.value
                 })}
                type="text" className="border border-indigo-400 py-2 px-4" />
              </>
              <>
              <label htmlFor="" className="text-sm">email</label>
                <input 
                   value={user.email}
                   onChange = { e => setUser({
                    ...user,
                     email:e.target.value
                   })}
                type="text" className="border border-indigo-400 py-2 px-4" />
              </>

              <button className="bg-indigo-500 font-bold text-sm py-2 w-full"
              >submit</button>
          </div>

      </form>
    </div>
  );
}

export default FormHandling;
