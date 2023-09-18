import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { Image_Base_Url } from '../Services/Constant';

const screenWidth = window.innerWidth;

const Slider = () => {
    const [movieList, SetMovieList] = useState([]);

    const elemenRef = useRef(); 

    useEffect(() =>{
        getTrendingMovies(); 
    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
        //console.log(resp.data.results);
            SetMovieList(resp.data.results)
        })
    }

    const sliderRight = (element) => {
        element.scrollLeft+=screenWidth-110
    }
    const sliderLeft = (element) => {
        element.scrollLeft-=screenWidth-110
    }
  return (
    <div>
        <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={()=>sliderLeft(elemenRef.current)}/>
        <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0' onClick={()=>sliderRight(elemenRef.current)}/ >
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elemenRef }>
        {movieList.map((item,index)=>(
            <img src={Image_Base_Url + item.backdrop_path} className='min-w-full md:h-[310px] object-cover
            object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in'/>
        ))}
    </div>
    </div>
  )
}

export default Slider