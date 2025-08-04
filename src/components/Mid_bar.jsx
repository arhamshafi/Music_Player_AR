import React, { useContext } from 'react'
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



function Mid_bar() {

  let {setside_bar_1} = useContext(App_context)
  return (
    <div className='w-[80%] lg:w-[65%] min-h-screen px-5'>
      <div className='flex items-center gap-2'>
        <FaBars  className='text-white  text-2xl mt-4.5 block lg:hidden cursor-pointer hover:opacity-75 transition-all duration-200 ease-in-out' onClick={()=>setside_bar_1(true)}/>
      <div className='h-max relative mt-5 w-[65%] '>
        <input type='text' placeholder='Search By Songs ' className='bg-white/20 inp outline-none px-9 tracking-[1px] text-sm border-2 border-transparent focus:border-orange-600 transition-all duration-150 ease-in text-white rounded-xl h-[40px] w-full ' />
        <IoSearchSharp className='absolute top-2.5 left-2 text-xl text-white/60' />
      </div>

      </div>
      <div className='w-full h-max  mt-7 flex justify-between flex-wrap-reverse self-center gap-5 items-center'>
        <div className='w-[250px] xl:w-[30%] h-[250px] rounded-2xl bg-cover  relative bg-center ' style={{ backgroundImage: `url(${bg_img})` }}>
          <div className='absolute top-0 left-0 p-2 w-full h-full bg-black/40'>
            <p className='text-white/80 mt-3 text-sm flex items-center gap-1 '><MdAudiotrack className='text-orange-500' /> 50+ Tracks </p>
            <p className='text-white font-bold mt-3 text-xl tw_sh capitalize'>playlist of the day </p>
            <p className='text-white/60 mt-3 text-sm tw_sh '>Coming Soon.. </p>
            <div className='w-[90%] mx-auto mt-6 h-[40%] rounded-xl bg-white/20 flex justify-center items-center flex-col gap-2 backdrop-blur-[2px] '> <MdUpcoming className='text-xl mt-1 scale-250 text-orange-600 ' /> <p className='text-white font-bold tracking-[1px] mt-3'>Stay Tuned</p> </div>
          </div>
        </div>
        <div className='w-[80%] xl:w-[65%] h-[250px] rounded-2xl overflow-hidden relative '> <div className='absolute p-4 top-0 left-0 w-full h-full bg-black/20 z-5'>
          <BsThreeDotsVertical className='absolute top-5 right-3 hover:opacity-55 transition-all duration-200 ease-in-out cursor-pointer scale-110 text-white text-xl' onClick={()=>toast.info("U will Notify Soon !")}/>
          <h1 className='text-white font-bold text-xl tw_sh'>Be the First to Know – Live Concert Alerts</h1>
          <p className='text-white/80 text-sm mt-20  tracking-[1px] '>Never miss your favorite artist performing live again. Turn on notifications and be the first to know when a new concert goes live. Stay updated, stay in the vibe.</p>
          <div className='flex items-center justify-end gap-3 w-full '>
            <button className='bg-orange-600 mt-4 text-white text-sm ox_sh hover:opacity-85 px-3 py-1 rounded-lg cursor-pointer active:scale-95 transition-all duration-200 ease-in-out' onClick={()=>toast.info("No concert Avaible Now")} >Get Tickets Now</button>
            <FaBell className=' text-orange-500 text-xl mt-4 hover:opacity-55 cursor-pointer active:scale-95 scale-105 transition-all duration-200 ease-in-out' onClick={()=>toast.info("U will Notify Soon !")} />
          </div>
        </div><video autoPlay loop muted src={video1} className='w-full -translate-y-5 ' ></video></div>
      </div>
    </div>
  )
}

export default Mid_bar