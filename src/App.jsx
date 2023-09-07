import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ListProduct from './pages/ListProduct'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/list-product' element={<ListProduct/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
