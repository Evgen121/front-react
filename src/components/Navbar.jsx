import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
  const isAuth = true

/*   const ActiveStyle={
    color:'white',
  } */
  return (
    <div className="flex py-4 justify-between items-center">
      <span className="flex justify-center items-center w-6 h-6 bg-gray-600 text-base text-white rounded-md ">Us</span>
     
        {
          isAuth && ( <ul className="flex gap-8">
       
          <li ><Link to={'/'} href="/" className="text-base  hover:text-white" 
            //style={({isActive}) => isActive ? ActiveStyle : undefined}
          >Home</Link> </li>
         
          <li ><Link to={'new'} href="/" className="text-base  hover:text-white">Add posts</Link></li>
          
          </ul>)
        }

      <div className="flex justify-center items-center bg-gray-600 text-base text-white rounded-md px-4 py-2">
        {isAuth ? (
          <button>Exit</button>):(
            <Link to={'/login'}>Login</Link>
          )}
      </div>
    </div>
  )
}

export default Navbar