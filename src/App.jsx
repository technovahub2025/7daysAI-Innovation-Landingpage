import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div className=' p-4 bg-gradient-to-br from-blue-50 via-white to-cyan-50'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<h1 className='text-3xl font-bold underline'>About Page</h1>} />
        </Routes>
      </BrowserRouter>

    
    
    </div>
  )
}

export default App