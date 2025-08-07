import React, { useContext } from 'react'
import { App_context } from '../context'
import { GiCaptainHatProfile } from "react-icons/gi";

function Side_bar2() {
  let { crnt_user } = useContext(App_context)
  let { side_bar2 } = useContext(App_context)
  return (
    <>
      <div className={`w-[300px] lg:block hidden xl:w-[20%] min-h-screen px-4 py-3 bg-[#1a1a1a]`}  >
        <div className='py-4 relative rounded-2xl text-sm tw_sh text-white tw_sh mt-2 tracking-[1px]'>Welcome !  <span className='text-orange-400 to_sh text-lg'>{crnt_user.name}</span>  <GiCaptainHatProfile className='text-white absolute top-0 left-0 -rotate-25 text-2xl' /></div>
        <p className='text-white/70 text-sm mt-5 tracking-[1.5px]'>New Release</p>
        <div className='w-full max-h-[170px] mt-7 overflow-y-auto'>
          <div className='w-full h-[70px] flex justify-between px-2 items-center mt-3 bg-black rounded-xl '>
            <div className='w-[60px] rounded-lg h-[80%] bg-white'></div>
            <div className='w-[70%] rounded-lg h-[80%] bg-white'>
              <p>Name</p>
              <div className='flex items-center '></div>
            </div>
          </div>

        </div>
      </div>
      {/* ////////// */}
      <div className={`w-[230px] sm:w-[300px] lg:hidden transition-all duration-300 ease-in-out fixed top-0 right-0 z-8 block px-2 py-3 xl:w-[20%] min-h-screen bg-[#1a1a1a] ${side_bar2 ? "right-0" : "right-[-240px] sm:right-[-305px]"} `}  >
        <div className='py-4 relative px-3 rounded-2xl text-sm tw_sh text-white tw_sh mt-2 tracking-[1px]'>Welcome !  <span className='text-orange-400 to_sh text-md'>{crnt_user.name}</span>  <GiCaptainHatProfile className='text-white absolute top-0 left-1 -rotate-25 text-2xl' /></div>
      </div>

    </>
  )
}

export default Side_bar2