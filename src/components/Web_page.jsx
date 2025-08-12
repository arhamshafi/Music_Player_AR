import React, { useContext, useState } from 'react'
import { App_context } from '../context'
import Side_bar1 from './Side_bar1'
import Mid_bar from './Mid_bar'
import Side_bar2 from './Side_bar2'
// import { MdOutlineDownloading } from "react-icons/md";
{/* <MdOutlineDownloading /> */ }
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { BsFillPauseFill } from "react-icons/bs";
import { HiMiniXMark } from "react-icons/hi2";

function Web_page() {

  let { setside_bar_1, side_bar1, side_bar2, setside_bar_2, isplaying, currentTrack, handle_track, setCurrentTrack, setisplaying } = useContext(App_context)

  return (

    <div className='w-full min-h-screen bg-black flex justify-between '>
      <div className={`w-full h-screen  pb-5 bg-black/60 ${side_bar1 || side_bar2 ? "visible opacity-100" : "invisible opacity-0"} transition-all ease-in-out duration-200 fixed top-0 left-0 z-8`} onClick={() => { setside_bar_1(false), setside_bar_2(false) }}></div>

      <div className={`w-full bg-orange-600  h-[70px] fixed ${currentTrack !== null ? "bottom-0 opacity-100" : "bottom-[-90px] opacity-0"} transition-all duration-300 ease-in left-0 ox_sh flex justify-center items-center gap-7 lg:gap-5 xl:gap-7 z-4 text-white text-2xl`}>
        <div className='absolute top-[-14px] right-3 lg:right-[300px] xl:right-[310px] w-[35px] h-[15px] flex justify-center cursor-pointer bg-orange-600 ' style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 50%, 99% 100%, 0 100%, 0% 50%)' }} onClick={() => { setCurrentTrack(null), handle_track(currentTrack) }} > <HiMiniXMark className='text-white scale-80 -translate-y-1 ' /> </div>
{/* ////////////////////// */}
        <div className={` w-[200px] md:w-[290px] px-3 h-[60px] bg-black rounded-lg left-2 md:left-[2%] lg:left-[15%] xl:left-[16%] absolute flex justify-between items-center ${currentTrack ? "opacity-100" : "opacity-0"} transition-all duration-100 ease-in-out `} >
          <div className='w-[45px] hidden md:block rounded-sm h-[45px] bg-white bg-center bg-cover ' style={{ backgroundImage: `url(${currentTrack?.image})` }} ></div>
          <div className='w-[200px] h-[50px] relative '>
            <div className={`w-[30px] h-[25px] absolute right-2 top-0 ${isplaying ? "opacity-100" : "opacity-0"} transition-all duration-200 ease-in-out bg-black`}>
              <img src="/imges_folder/wave.gif" className="invert w-full h-full" />
            </div>
            <h1 className='text-[20px] md:text-xl w-max h-max '> {currentTrack?.title} </h1>
            <div className='w-full h-[10px] mt-2 flex justify-between items-center'>
              <p className='text-[10px] text-white'>12</p>
              <input type="range" min="0"  max="100" className='w-[75%] mx-auto h-[4px]  ' />
              <p className='text-[10px] text-white'>1233</p>
            </div>
          </div>
        </div>
{/* ///////////////////// */}
        <MdSkipPrevious className='scale-130 cursor-pointer  hover:text-black transition-all duration-200 ease-in-out hover:scale-140 active:scale-130' />
        <div onClick={() => handle_track(currentTrack)} className='w-max h-max '>
          {isplaying ? <BsFillPauseFill className='scale-160 cursor-pointer  hover:text-black transition-all duration-200 ease-in-out hover:scale-180 active:scale-160 ' /> : <FaPlay className='scale-105 cursor-pointer  hover:text-black transition-all duration-200 ease-in-out hover:scale-120 active:scale-105' />}
        </div>
        <MdSkipNext className='cursor-pointer scale-130 hover:text-black transition-all duration-200 ease-in-out hover:scale-140 active:scale-130' />
      </div>

      <Side_bar1 />
      <Mid_bar />
      <Side_bar2 />
    </div>

  )
}

export default Web_page