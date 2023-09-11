import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import ListProduct from './pages/ListProduct'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Description from './pages/Description'
import PrivateRouter from './pages/private/PrivateRouter'
import HomeAdmin from './pages/private/HomeAdmin'
import ManagerProduct from './pages/private/ManagerProduct'
import ManagerUser from './pages/private/ManagerUser'

function App() {
  const location=useLocation()

  useEffect(()=>{
    window.scroll({top:0, behavior:"smooth"});
  },[location.pathname])

  return (
    <>
      <Routes>
        {/* Router dc phep truy cap */}
        <Route path='/'element={<Home/>}/>
        <Route path='/list-product' element={<ListProduct/>}/>
        <Route path='product/:id' element={<Description/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>


        {/* Router chi admin moi dc truy cap */}
        <Route path='/admin' element={<PrivateRouter/>}>
          <Route index element={<HomeAdmin/>}/>
          <Route path='manager-product' element={<ManagerProduct/>}/>
          <Route path='manager-user' element={<ManagerUser/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
