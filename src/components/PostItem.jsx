import React from 'react'
import {Link} from "react-router-dom"
import {AiFillEye,AiOutlineMessage} from 'react-icons/ai'

const PostItem = ({question}) => {
   
  return (
      <Link to={`/:id`}>
    <div className='flex flex-col basis-1/4 flex-grow'>
        <div className="flex justify-between items-center pt-2">
            <div className="text-base text-white opacity-50">{/* {question.username} */} Bob</div>
            <div className="text-base text-white opacity-50">{/* {question.Dateofquestion} */} 14.09.2022</div>
        </div>
        <div className="text-white text-base">{/* {question.question} */}  Hello world</div>
        <p className="text-white opacity-60 text-base pt-4">{/* {question.discription} */}Hello world Hello world Hello world
        Hello world Hello world Hello world</p>
        <div className='flex gap-3 items-center'>
            <button className='flex items-center justify-center gap-2 text-base text-white opacity-50'>
                <AiFillEye/> <span>0</span>
            </button>
            <button className='flex items-center justify-center gap-2 text-base text-white opacity-50'>
                <AiOutlineMessage/> <span>{/* {question.comments?.length} */} 0</span>
            </button>
        </div>

    </div>
    </Link>
  )
}

export default PostItem