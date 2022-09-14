import React,{useState} from 'react'
import {Link} from "react-router-dom"

const LoginPage = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  //const dispatch =useDispatch()
  
  const handleSubmit = () => {
  
    
    //after sumbit
      
      setEmail('')
      setPassword('')
   
  }

  return (
    <form onSubmit={e=>e.preventDefault()} 
    className='w-1/4 h-60 mx-auto mt-40'>
      <h1 className='text-lg text-white text-center'>Login</h1>
      <label className='text-base text-xs text-gray-200'>
        Email:
        <input type='text' 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder='Email...'
        className='mt-1 w-full rounded-lg bg-gray-400 border py-1 px-2 text-base outline-none placeholder:text-gray-700'/>
      </label>
      <label className='text-base text-xs text-gray-200'>
        Password:
        <input type='password' 
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Password...'
        className='mt-1 w-full rounded-lg bg-gray-400 border py-1 px-2 text-base outline-none placeholder:text-gray-700'/>
      </label>

      <div className="flex gap-8 justify-center mt-4">
      <button type="submit" onClick={handleSubmit}
      className="flex justify-center items-center bg-gray-600 text-base text-white rounded-md px-4 ">Enter</button>
      <Link to={"/register"}className="flex justify-center items-center bg-gray-600 text-base text-white rounded-md px-4">Register</Link>
      </div>
    </form>
  )
}


export default LoginPage