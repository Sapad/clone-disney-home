import React from 'react'
import { Image_Base_Url } from '../Services/Constant'

function HrMovieCard({movie}) {
  return (
    <section className='hover:scale-110 transition-all duration-150'>
    <img src={Image_Base_Url+movie.backdrop_path} alt="" className='w-[110px] md:w-[200px] rounded-lg 
    hover:border-[3px] border-gray-400 cursor-pointer'/>
    <h2 className='w-[110px] md:w-[200px] text-white
    mt-1 '>{movie.title}</h2>
    </section> 
  )
}

export default HrMovieCard