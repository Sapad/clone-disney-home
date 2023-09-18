import React from 'react'
import { Image_Base_Url } from '../Services/Constant'
function MovieCard({movie}) {
  return (
    <>
        <img src={Image_Base_Url+movie.poster_path} alt="" className='w-[110px] md:w-[200px] rounded-lg 
        hover:border-[3px] border-gray-400 hover:scale-110 cursor-pointer transition-all duration-150 ease-in'/>
    </>
  )
}

export default MovieCard