import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

//Pages
import Home from './pages/Home'
import Cart from './pages/Cart'

//Component
import Navbar from './components/Navbar'

function App() {
  return (
    <>

      <BrowserRouter >
        {/* Navbar Component  */}
        <Navbar />


        <Routes >

          {/* Home Page  */}
          <Route path='/' element={<Home />} ></Route>

          {/* Cart Page  */}
          <Route path='/cart' element={<Cart />} ></Route>


        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
