import React from 'react'
import {Link} from "react-router-dom"
import {AiFillDelete, AiFillEye,AiOutlineMessage, AiTwotoneEdit} from 'react-icons/ai'
import {useState} from "react"


const PostPage = () => {
  const [comments, setComments]=useState('')


  const handleSubmit = ()=>{}
  
  const handleDelet=()=>{}

  return (
    <div>
      <button className="flex justify-center items-center bg-gray-600 text-base text-white rounded-md px-4 ">
        <Link to={'/'}>Back</Link></button>
      <div className="flex gap-10 py-8">
        <div className='flex flex-col basis-1/4 flex-grow'>
          <div className="flex justify-between items-center pt-2">
              <div className="text-base text-white opacity-50">{/* {question.username} */} Bob</div>
              <div className="text-base text-white opacity-50">{/* {question.Dateofquestion} */} 14.09.2022</div>
          </div>
          <div className="text-white text-base">{/* {question.question} */}  Hello world</div>
          <p className="text-white opacity-60 text-base pt-4">{/* {question.discription} */}Hello world Hello world Hello world
          Hello world Hello world Hello world</p>
          <div className='flex gap-3 items-center mt-2 justify-between'>
          <div className='flex gap-3 mt-4'>
              <button className='flex items-center justify-center gap-2 text-base text-white opacity-50'>
                  <AiFillEye/> <span>0</span>
              </button>
              <button className='flex items-center justify-center gap-2 text-base text-white opacity-50'>
                  <AiOutlineMessage/> <span>{/* {question.comments?.length} */} 0</span>
              </button>
          </div>
        <div className="flex gap-3 mt-4">
          <button className='flex items-center justify-center gap-2 text-white opacity-50'>
            <Link to={'edit'}> 
            <AiTwotoneEdit/>
           </Link> 
          </button>
          <button onClick={handleDelet}
          className='flex items-center justify-center  gap-2 text-white opacity-50'
          >
            <AiFillDelete/>
          </button>
        </div>
        </div>


      </div>
        <div className="w-1/3 p-8 bg-gray-700 flex flex-col gap-2 rounded-lg">
          <form className='flex gap-2'>
            <input type='text'
            value={comments}
            onChange={(e)=>setComments(e.target.value)}
            placeholder='Comment'
            className=' text-black w-full rounded-lg bg-gray-400 border p-2 text-base outline-none placeholder:text-gray-700'/>
            <button type='submit'
            onClick={handleSubmit}
            className='flex items-center justify-center bg-gray-600 text-button text-white rounded-lg py-2 px-4'>Send</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPage