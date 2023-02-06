import React,{useRef} from 'react';

const UnControlledForm = () => {
    const firstNameRef = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        console.log(firstNameRef.current.value)
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
                    ref = {firstNameRef}
                    className="border border-indigo-400 py-2 px-4" />
                  </>
                  <>
                  <label htmlFor="" className="text-sm">last name</label>
                    <input 
                    type="text" className="border border-indigo-400 py-2 px-4" />
                  </>
                  <>
                  <label htmlFor="" className="text-sm">email</label>
                    <input 
                    type="text" className="border border-indigo-400 py-2 px-4" />
                  </>
    
                  <button className="bg-indigo-500 font-bold text-sm py-2 w-full"
                  >submit</button>
              </div>
    
          </form>
        </div>
      );
}

export default UnControlledForm;
