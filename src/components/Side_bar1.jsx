import React, { useContext, useState } from 'react'
import { FaHeadphonesAlt } from "react-icons/fa";
import { RiVoiceprintLine } from "react-icons/ri";
import { TbPlaylist } from "react-icons/tb"
import { IoStatsChart } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaPodcast } from "react-icons/fa";
import { App_context } from '../context';
import { useNavigate } from 'react-router-dom';

function Side_bar1() {

    let { side_bar1, setcrnt_user } = useContext(App_context)
    let [active, setactive] = useState("Feed")
    let navigate = useNavigate()


    return (

        <div className={`w-[200px] lg:w-[15%] min-h-screen text-white transition-all ease-in-out duration-300 bg-[#1a1a1a] fixed top-0 ${side_bar1 ? "left-0" : "left-[-205px]"} z-10 lg:relative lg:left-0 `}>
            <p className='font-bold mt-5 ml-4 text-lg hidden items-center xl:flex gap-3'> <FaHeadphonesAlt className='text-orange-500 scale-115' /> MUSIC PLAYER</p>
            <p className='font-bold mt-5 ml-4 text-lg flex items-center xl:hidden gap-3'> <FaHeadphonesAlt className='text-orange-500 scale-115' /> PLAYER</p>
            <div className='mt-10'>
                {
                    [{ icon: <RiVoiceprintLine />, name: "Feed" }, { icon: <TbPlaylist />, name: "Playlists" }, { icon: <IoStatsChart />, name: "Statistics" }].map((ele, idx) => {
                        return (
                            <div key={idx} className={`w-full border-l-3 hover:scale-105 hover:translate-x-2 transition-all duration-200 ${active === ele.name ? "border-orange-500 text-orange-400 bg-gradient-to-r from-orange-600/30 to-transparent" : "border-transparent text-white/70 "} ease-in-out cursor-pointer h-[30px] mt-2 pl-5 flex items-center gap-2 `} onClick={() => setactive(ele.name)}>{ele.icon} {ele.name}</div>
                        )
                    })
                }
            </div>
            <p className='uppercase ml-4 text-sm mt-8 tracking-[1px]'>Your Music</p>
            <div className='mt-8'>
                {
                    [{ icon: <FaHeart />, name: "Favourites" }, { icon: <FaPodcast />, name: "Podcasts" }].map((ele, idx) => {
                        return (
                            <div key={idx} className={`w-full border-l-3 hover:scale-105 hover:translate-x-2 transition-all duration-200 ${active === ele.name ? "border-orange-500 text-orange-400 bg-gradient-to-r from-orange-600/30 to-transparent" : "border-transparent text-white/70 "} ease-in-out cursor-pointer h-[30px] mt-2 pl-5 flex items-center gap-2 `} onClick={() => setactive(ele.name)}>{ele.icon} {ele.name}</div>
                        )
                    })
                }
            </div>
            <button className='hover:text-orange-500 hover:border-orange-600 border-1 ml-3 mt-15 py-1 px-5 text-white border-transparent text-sm font-bold tracking-[1px] transition-all duration-200 ease-in-out cursor-pointer active:scale-95 hover:bg-transparent bg-orange-600 ox_sh rounded-lg' onClick={() => { navigate("/"), localStorage.removeItem("crnt_login") }} >Log Out</button>
        </div>

    )
}

export default Side_bar1