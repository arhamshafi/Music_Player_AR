import React, { useContext } from 'react'
import { App_context } from '../context'
import Side_bar1 from './Side_bar1'
import Mid_bar from './Mid_bar'
import Side_bar2 from './Side_bar2'

function Web_page() {

  let { setside_bar_1  , side_bar1  , side_bar2 , setside_bar_2 } = useContext(App_context)

  return (

    <div className='w-full min-h-screen bg-black flex  '>
      <div className={`w-full h-screen  pb-5 bg-black/60 ${side_bar1 || side_bar2 ? "visible opacity-100" : "invisible opacity-0"} transition-all ease-in-out duration-200 fixed top-0 left-0 z-8`} onClick={() => {setside_bar_1(false) , setside_bar_2(false)}}></div>
      <Side_bar1 />
      <Mid_bar />
      <Side_bar2 />
    </div>

  )
}

export default Web_page