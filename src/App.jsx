import React from 'react'
import Sign_in from './components/Sign_in'
import Sign_up from './components/Sign_up'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className='w-full h-max bg-white select-none'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sign_in />} />
          <Route path='/sign_up' element={<Sign_up />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App