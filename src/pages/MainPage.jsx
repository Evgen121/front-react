import React from 'react'
import PostItem from '../components/PostItem'

const MainPage = ({questions}) => {

/*   if(!questions){
    return <div className='text-base text-center text-white py-10'>
      YOU HAVE NO POSTS
    </div>
} */

  return (
    <div className="max-w-[900px] mx-auto py-10">
        <div className="flex justify-between gap-8">
          <div className="flex flex-col gap-10 basis-4/5">
          <PostItem/>
          {/*   
           {
             questions?.map((question, index)=>(
                <PostItem key={index} question={question} />
             ))
           } */}
          </div>
          </div>
    </div>
  )
}

export default MainPage