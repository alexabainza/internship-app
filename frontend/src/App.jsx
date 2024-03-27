import { useState } from 'react'
import Navbar from './components/Navbar'
import Login from './pages/credentials/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FilterAhead from './pages/FilterAhead'
import Landing from './pages/credentials/Landing'



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>

      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/filter" element={<FilterAhead/>}></Route>
        <Route path="/landing" element={<Landing/>}></Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
