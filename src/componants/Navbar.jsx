import React from 'react'

const Navbar = () => {
  return (
    <div className='flex w-[100%] h-[10vh]  items-center font-bold '>
        {/* Logo */}
        
        <div className='w-[50px] h-[50px] ml-20'>
            <img src=".//src/assets/web-183282273.webp" alt="" className=''/>
        </div>
        <ul className='flex gap-6 ml-96 '>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTANT</li>
        </ul>
        <div className='ml-96 w-[92px] h-[28px] bg-red-600 text-white '>
            <button className='ml-6'>Login</button>
        </div>
        
    </div>
  )
}

export default Navbar