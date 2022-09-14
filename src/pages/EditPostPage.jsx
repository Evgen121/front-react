import React from 'react'
import {Link} from "react-router-dom"

const EditPostPage = () => {
  return (
  <div>
    <button className="flex justify-center items-center bg-gray-600 text-base text-white rounded-md px-4 ">
    <Link to={'/'}>Back</Link></button>
    <div>EditPostPage</div>
    </div>
  )
}

export default EditPostPage