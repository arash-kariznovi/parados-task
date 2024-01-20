import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className=' container mx-auto px-6'>
      <div className='flex flex-col flex-wrap md:flex-row justify-around relative text-white py-12'>
        <Link to={'/upload'}>
          <button className='mx-auto bg-sky-400 border-2 hover:bg-sky-800 hover:border-sky-100 p-20 rounded-md my-2 text-center '>
            <img src='upload.png' alt='upload' />
          </button>
        </Link>
        <Link to={'/files'}>
          <button className='mx-auto bg-sky-400 border-2 hover:bg-sky-800 hover:border-sky-100 p-20 rounded-md my-2 text-center '>
            <img src='download.png' alt='download' />
          </button>
        </Link>
        <Link to={'/addtext'}>
          <button className='mx-auto bg-sky-400 border-2 hover:bg-sky-800 hover:border-sky-100 p-20 rounded-md my-2 text-center '>
            <img src='addtext.png' alt='addtext' className='w-20 h-20' />
          </button>
        </Link>
        <Link to={'/texts'}>
          <button className='mx-auto bg-sky-400 border-2 hover:bg-sky-800 hover:border-sky-100 p-20 rounded-md my-2 text-center '>
            <img src='records.png' alt='records' className='w-20 h-20' />
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Home
