import React, { useEffect, useRef, useState } from 'react'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import HrMovieCard from './HrMovieCard';

function MovieList({genreId,index_}) {
  const [movieList, setMovieList] = useState([])
  const elemenRef = useRef(null);
    useEffect(() =>{
        getMovieByGenreId();
    },[])

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            //console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }
    const slideRight=(e)=>{
      e.scrollLeft+=500;
  }
  const slideLeft=(e)=>{
      e.scrollLeft-=500;
  }
  return (
    <div className='relative'>
    <IoChevronBackOutline className={`text-[50px] text-white p-2 z-10 cursor-pointer
    hidden md:block absolute ${index_%3==0?'mt-[50px]' : 'mt-[150px]'} `} onClick={()=>slideLeft(elemenRef.current)}/>
    <div className='flex overflow-x-auto gap-5 scrollbar-none scroll-smooth pt-5 px-3 pb-5' ref={elemenRef}>
      {movieList.map((item,index)=>(
        <>
        {index_%3==0? <HrMovieCard movie={item}/> : <MovieCard movie={item}/>}
        </>
      ))}
    </div>
    <IoChevronForwardOutline className={`text-[50px] text-white p-2 z-10 cursor-pointer
    hidden md:block absolute top-0 right-0 ${index_%3==0?'mt-[50px]' : 'mt-[150px]'} `}onClick={()=>slideRight(elemenRef.current)}/>
    </div>
  )
}

export default MovieList