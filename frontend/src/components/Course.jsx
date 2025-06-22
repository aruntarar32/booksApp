import React from 'react';
import Cards from './Cards';
import List from "../../public/List.json";
import {Link} from "react-router-dom"

function Course() {
  
  return (
     <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
      <div className='mt-28 flex justify-center items-center text-center flex-col'>
        <h1 className='text-2xl md:text-4xl '>We Are Delighted to have you <span className='text-pink-500 '>Here !!</span> </h1>
        <p className='mt-10'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
        </p>
        <Link to="/">
          <button className='bg-pink-500 hover:bg-pink-700 text-white hover:text-white rounded-md mt-6 px-4 py-2 duration-300'>Back</button>
        </Link>
      </div>

     </div>

     <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {List.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
     </div>
      
     </>
  )
}

export default Course