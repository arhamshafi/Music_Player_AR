import React, { useContext, useState } from 'react'
import { App_context } from '../context'
import { GiCaptainHatProfile } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";
import { BsFillPauseFill } from "react-icons/bs";

function Side_bar2() {

  let { crnt_user, side_bar2, new_release, isplaying, handle_track, currentTrack } = useContext(App_context)

  return (
    <>
      <div className={`w-[300px] lg:block hidden xl:w-[20%] min-h-screen px-4 py-3 bg-[#1a1a1a]`}  >
        <div className='py-4 relative rounded-2xl text-sm tw_sh text-white tw_sh mt-2 tracking-[1px]'>Welcome !  <span className='text-orange-400 to_sh text-lg'>{crnt_user.name}</span>  <GiCaptainHatProfile className='text-white absolute top-0 left-0 -rotate-25 text-2xl' /></div>
        <p className='text-white/70 text-sm mt-5 tracking-[1.5px]'>New Release</p>
        <div className="w-full h-[170px] mt-7 overflow-y-auto overflow-x-hidden only-y-scroll">
          {
            new_release.map((ele, idx) => {
              // console.log(ele);

              return (
                <div key={idx} className='w-[98%] mx-auto h-[70px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-102 flex justify-between px-1.5 group items-center  mt-3 bg-black rounded-xl ' onClick={() => handle_track(ele)} >

                  <div className='w-[60px] rounded-lg h-[80%] bg-white  bg-center bg-cover relative ' style={{ backgroundImage: `url(${ele.image})` }} >
                    <div className='w-full h-full group-hover:bg-black/50 group-hover:opacity-100 flex justify-center items-center opacity-0 group-hover:visible invisible transition-all duration-200 ease-in-out'  >
                      {ele.id === currentTrack?.id && isplaying ? <BsFillPauseFill className='text-white text-3xl opacity-80' /> : <FaPlay className='text-white text-xl opacity-80' />}

                    </div></div>

                  <div className='w-[67%] rounded-lg h-[80%] text-white flex flex-col justify-evenly items-start'>
                    <p className='text-xl'>{ele.title}</p>
                    <div className='flex items-center gap-1 text-sm  text-white/40'>
                      <p className='text-[10px]'>{ele.artistName}</p>.<p className='text-[10px]'>{ele.category}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <p className='text-white/70 text-sm mt-5 tracking-[1.5px]'>Trending Now Artists</p>
        <div className='w-full h-[410px] mt-5 overflow-y-auto'>
          <div className='w-full h-[70px] flex justify-between px-2 items-center mt-3 bg-black rounded-xl '></div>

        </div>
      </div>
      {/* ////////// */}
      <div className={`w-[230px] sm:w-[300px] lg:hidden transition-all duration-300 ease-in-out fixed top-0 right-0 z-8 block px-2 py-3 xl:w-[20%] min-h-screen bg-[#1a1a1a] ${side_bar2 ? "right-0" : "right-[-240px] sm:right-[-305px]"} `}  >
        <div className='py-4 relative px-3 rounded-2xl text-sm tw_sh text-white tw_sh mt-2 tracking-[1px]'>Welcome !  <span className='text-orange-400 to_sh text-md'>{crnt_user.name}</span>  <GiCaptainHatProfile className='text-white absolute top-0 left-1 -rotate-25 text-2xl' /></div>
        <p className='text-white/70 text-sm mt-5 tracking-[1.5px]'>New Release</p>
        <div className='w-full h-[170px] mt-7 overflow-y-auto'>
          {
            new_release.map((ele, idx) => {
              // console.log(ele);

              return (
                <div key={idx} className='w-[98%] mx-auto h-[70px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-102 flex justify-between px-1.5 group items-center  mt-3 bg-black rounded-xl ' onClick={() => handle_track(ele)} >

                  <div className='w-[60px] rounded-lg h-[80%] bg-white  bg-center bg-cover relative ' style={{ backgroundImage: `url(${ele.image})` }} >
                    <div className='w-full h-full group-hover:bg-black/50 group-hover:opacity-100 flex justify-center items-center opacity-0 group-hover:visible invisible transition-all duration-200 ease-in-out'  >
                      {ele.id === currentTrack?.id && isplaying ? <BsFillPauseFill className='text-white text-3xl opacity-80' /> : <FaPlay className='text-white text-xl opacity-80' />}

                    </div></div>

                  <div className='w-[67%] rounded-lg h-[80%] text-white flex flex-col justify-evenly items-start'>
                    <p className='text-xl'>{ele.title}</p>
                    <div className='flex items-center gap-1 text-sm  text-white/40'>
                      <p className='text-[10px]'>{ele.artistName}</p>.<p className='text-[10px]'>{ele.category}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
        <p className='text-white/70 text-sm mt-5 tracking-[1.5px]'>Trending Now Artists</p>
        <div className='w-full h-[410px] mt-5 overflow-y-auto'>
          <div className='w-full h-[70px] flex justify-between px-2 items-center mt-3 bg-black rounded-xl '></div>

        </div>
      </div>

    </>
  )
}

export default Side_bar2