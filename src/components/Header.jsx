import React, {useState} from 'react'
import logo from '../assets/Image/LogoSample_ByTailorBrands (1).jpg'
import {HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv} from 'react-icons/hi2'
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import HeaderItems from './HeaderItems'

const Header = () => {
  const [toggle,setToggle] = useState(false)

  const menu= [
    {
    name:'Home',
    icon: HiHome
    },
    {
      name:'SEARCH',
      icon:HiMagnifyingGlass
    },
    {
      name:'Watch List',
      icon: HiPlus
    },
    {
      name:'Originals',
      icon: HiStar
    },
    {
      name:'Movies',
      icon:HiPlayCircle
    },
    {
      name:'Series',
      icon:HiTv
    }

  ]
  return (
    <div className='flex items-center justify-between p-5 '>
    <div className='flex  gap-8 items-center'>
    <img src={logo} className='w-[80px] 
    md:w-[115px] object-cover' />
    <div className='hidden md:flex gap-8 '>
    {menu.map((item)=>(
        <HeaderItems name={item.name} Icon={item.icon} />
    ))}
    </div>
    <div className='flex md:hidden gap-5 '>{/*agar hidden pada item*/}
    {menu.map((item,index)=>index<3&&(
        <HeaderItems name={''} Icon={item.icon} />
    ))}
    </div>
    <div className='md:hidden' onClick={() =>setToggle(!toggle)}>
        <HeaderItems name={''} Icon={HiDotsVertical} /> 
        {toggle? <div className='absolute mt-3 border-[1px] p-3 px-3 py-2 '>
        {menu.map((item,index)=>index>2&&(
        <HeaderItems name={item.name} Icon={item.icon} />
    ))} 
        </div>:null}
    </div>
    </div>
    <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
    className='w-[40px] rounded-full '/>
</div>
    )
}

export default Header