import axios from 'axios'


const url ='http://jsonplaceholder.typicode.com/posts'

export const usePostApiCalls = async(values) => { 
    console.log(values)
    const res =  await axios.post(url,values)
    console.log(res)
}