import { useState } from 'react'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>

      <Routes>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
     <h1 className='text-red-700 text-2xl'>hii</h1>
    </>
  )
}

export default App
