import React , {useState} from 'react'

const AddPostPage = () => {
  const [ title, setTitle]=useState('')
  const [ text, setText]=useState('')

  const handleSubmit = () => {
    try {
      
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelet = () => {
    setTitle('')
    setText('')
  }

  return (
    <form className="w-1/3 mx-auto py-10"
    onSubmit={(e)=>e.preventDefault()}>
      <label className="text-base text-white opacity-70">
        Title post
        <input type='text' 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        placeholder='Title...'
        className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-base outline-none placeholder:text-gray-700'/>
      </label>
      <label className="text-base text-white opacity-70">
        Text post
        <textarea 
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder='Text...'
        className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-base outline-none resize-none h-40 placeholder:text-gray-700'/>
      </label>
    <div className="flex gap-8  justify-center  items-center mt-4">
        <button className="flex justify-center items-center bg-gray-600 text-base text-white rounded-md px-4"
        onClick={handleSubmit}>Add post</button>
        <button className="flex justify-center items-center bg-red-400 text-base text-white rounded-md px-4"
        onClick={handleDelet}>All delete</button>
    </div>
    </form>
  )
}

export default AddPostPage