import React from 'react'
import { productionHouseList } from '../Services/Constant'

function ProductionHouse() {
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
    {productionHouseList.map((item)=>(
        <div className='border-[2px] border-gray-600x`
        rounded-lg hover:scale-110 transition-all duration-300
        ease-in-out cursor-pointer relative shadow-xl 
        shadow-gray-700
        '>
             <video src={item.video} autoPlay loop playsInline muted 
        className='absolute z-0  top-0 rounded-md 
        opacity-0 hover:opacity-50'/> 
            <img src={item.image} className='w-full z-[1] opacity-100' /> 
           
        </div>
    ))}
</div>
  )
}

export default ProductionHouse