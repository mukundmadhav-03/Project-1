import React from 'react'

const Body = () => {
  return (
    <div className='flex w-100% h-[90vh] '>
        {/* Left Body */}
        <div className='w-[50%] h-[90vh] '>
            <div className='  ml-36 mt-16'>
            <h1 className='font-extrabold text-5xl'>YOUR FEET <br /> DESEREVE <br /> THE BEST</h1>
            <p className='text-[10px] mt-5'>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO <br /> HELP YOU WITH OUR SHOES YOUR FEET DESESRVE <br /> THE BEST AND WE'RE HERE TO HELP YOU WITH OUR <br /> SHOES.</p>

            <div className='flex gap-7 mt-5'>
                <button className='w-[92px] h-[26px] bg-red-600  items-center justify-center text-[14px] font-bold text-white'>Shop Now</button>

                <button className='w-[92px] h-[26px]  border-2 border-slate-400 items-center justify-center text-[14px] text-gray-600 font-semibold '>Category</button>
            </div>

            <p className='text-[12px] mt-5'>Also Available On</p>

            <div className='flex w-[50px] h-[50px]'>
                <img src=".//src/assets/Icon-1.png" alt="" />
                <img src=".//src/assets/amazon.png" alt="" />
                
            </div>
            
            </div>
        </div>

        {/* Right-Body */}
        <div className='w-[50%] h-[90vh] '>
            <img src=".//src/assets/Sp19_BB_Nike_Adapt_20181218_NIKE0538_Detail5_rectangle_1600.jpg" alt="" className='w-[400px] h-[400px] m-20' />
        </div>
    </div>
  )
}

export default Body