import React from 'react'
import Sign_in from './components/Sign_in'
import Sign_up from './components/Sign_up'
import { Route, Routes } from "react-router-dom"
import Web_page from './components/Web_page'

function App() {
  return (
    <div className='w-full h-max bg-white select-none'>
        <Routes>
          <Route path='/' element={<Sign_in />} />
          <Route path='/sign_up' element={<Sign_up />} />
          <Route path='/web' element={<Web_page/>} />
        </Routes>
    </div>
  )
}

export default App