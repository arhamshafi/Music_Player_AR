import React, { useContext } from 'react'
import { App_context } from '../context'

function Side_bar2() {
  let {side_bar2} = useContext(App_context)
  return (
    <div className = {`w-[300px] lg:block hidden xl:w-[20%] min-h-screen bg-green-400`} >Side_bar2</div>
  )
}

export default Side_bar2