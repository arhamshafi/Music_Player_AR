import React, { useContext, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { MdAudiotrack } from "react-icons/md";
import bg_img from "/imges_folder/Top-Spotify-Playlists-for-Every-Mood.webp"
import { MdUpcoming } from "react-icons/md";
import video1 from "/imges_folder/bg_video.mp4"
import { FaBell } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { toast } from 'react-toastify';
import { FaBars } from "react-icons/fa";
import { App_context } from '../context';
import { GoSidebarExpand } from "react-icons/go";
import { GiEgyptianProfile } from "react-icons/gi";



function Mid_bar({ setprofile, profile }) {

  let { setside_bar_1, setside_bar_2 } = useContext(App_context)

  return (
    <div className='w-full lg:w-[65%] min-h-screen px-2 sm:px-5 lg:px-5 relative '>
      <div className='flex items-center gap-3'>
        <FaBars className='text-white  text-xl mt-4.5 block lg:hidden cursor-pointer hover:opacity-75 transition-all duration-200 ease-in-out' onClick={() => { setside_bar_1(true), setside_bar_2(false) }} />
        <div className='h-max relative mt-5 w-[75%] sm:w-[65%] '>
          <input type='text' placeholder='Search By Songs ' className='bg-white/20 inp outline-none px-9 tracking-[1px] text-sm border-2 border-transparent focus:border-orange-600 transition-all duration-150 ease-in text-white rounded-lg sm:rounded-xl h-[30px] sm:h-[40px] w-full ' />
          <IoSearchSharp className='absolute top-1.5 sm:top-2.5 left-3 text-lg sm:text-xl text-white/60' />
        </div>
        <GiEgyptianProfile className='text-white absolute mt-5 text-lg sm:text-2xl cursor-pointer active:scale-95 hover:scale-102 transition-all duration-200 ease-out hover:text-orange-400 right-8 sm:right-13 lg:right-2 z-5' onClick={() => toast.error("Dashboard is Not Ready Yet")} />
        <GoSidebarExpand className='text-white absolute mt-5 text-lg sm:text-2xl block lg:hidden cursor-pointer active:scale-95 hover:scale-102 transition-all duration-200 ease-out hover:text-orange-400 right-1.5 sm:right-3 z-5' onClick={() => { setside_bar_2(true), setside_bar_1(false) }} />
      </div>
      <div className='w-full h-max mt-7 flex cn justify-between flex-wrap-reverse gap-5  items-center'>
        <div className='w-[400px] md:w-[32%] lg:w-[450px] xl:w-[30%] h-[200px] sm:h-[250px] rounded-2xl bg-cover  relative bg-center ' style={{ backgroundImage: `url(${bg_img})` }}>
          <div className='absolute top-0 left-0 p-2 w-full h-full bg-black/40'>
            <p className='text-white/80 mt-3 text-[14px] sm:text-sm flex items-center gap-1 '><MdAudiotrack className='text-orange-500' /> 50+ Tracks </p>
            <p className='text-white font-bold mt-1 sm:mt-3 text-md sm:text-xl tw_sh capitalize'>playlist of the day </p>
            <p className='text-white/60 anime_1 mt-1 sm:mt-3 text-[14px] sm:text-sm tw_sh '>Coming Soon.. </p>
            <div className='w-[90%] mx-auto mt-4 sm:mt-6 h-[40%] rounded-xl bg-white/15 flex justify-center items-center flex-col gap-1 backdrop-blur-[2px] '> <MdUpcoming className=' text-xl mt-1 scale-150 sm:scale-250 text-orange-600 ' /> <p className='text-white font-bold tracking-[1px] mt-1 sm:mt-3'>Stay Tuned</p> </div>
          </div>
        </div>
        <div className=' w-full md:w-[65%] lg:w-[90%] xl:w-[65%] bh h-[170px] sm:h-[200px] md:h-[250px] rounded-2xl overflow-hidden relative '> <div className='absolute p-2 sm:p-4 top-0 left-0 w-full h-full bg-black/50 z-5'>
          <BsThreeDotsVertical className='absolute dot_3icon top-3 md:top-5 right-2 md:right-3 hover:opacity-55 transition-all duration-200 ease-in-out cursor-pointer scale-110 text-white text-xl' onClick={() => toast.info("U will Notify Soon !")} />
          <h1 className='text-white font-bold text-lg fs_2 lg:text-xl tw_sh'>Be the First to Know – Live Concert Alerts</h1>
          <p className='text-white/80 text-sm mt-5 fs_1 md:mt-13 lg:mt-20  tracking-[1px] '>Never miss your favorite artist performing live again. Turn on notifications and be the first to know when a new concert goes live. Stay updated, stay in the vibe.</p>
          <div className='flex items-center mt-4  sm:mt-6 cn justify-end gap-3 w-full '>
            <button className='bg-orange-600 btn_book  text-white text-[10px] sm:text-sm ox_sh hover:opacity-85 px-2 sm:px-3 py-1 sm:py-2 rounded-lg cursor-pointer active:scale-95 transition-all duration-200 ease-in-out' onClick={() => toast.error("No concert Avaible Now")} >Get Tickets Now</button>
            <FaBell className='dn text-orange-500 text-xl hover:opacity-55 cursor-pointer active:scale-95 scale-105 transition-all duration-200 ease-in-out' onClick={() => toast.info("U will Notify Soon !")} />
          </div>
        </div><video autoPlay loop muted src={video1} className='w-full cover -translate-y-5 ' ></video></div>
      </div>
    </div>
  )
}

export default Mid_bar