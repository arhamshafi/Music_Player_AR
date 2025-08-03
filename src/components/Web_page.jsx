import React, { useContext } from 'react'
import { App_context } from '../context'

function Web_page() {

  let { crnt_user }  = useContext(App_context)

  return (

    <div> welcome {crnt_user.name} </div>

  )
}

export default Web_page