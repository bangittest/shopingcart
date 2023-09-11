import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Button from '../components/base/botton/Button'
import "./login.css"
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
        <Navbar/>
        <div
         className='minaa'>
          <form className='form-container'>
            <h3 className='form-heading'>Form Login</h3>
            <div className='form-group'>
              <label htmlFor="" className='form-label'>Email</label>
              <input type="text" id='email' placeholder='nhập địa chỉ email' />
            </div>
            <div className='form-group'>
              <label htmlFor="" className='form-label'>Password</label>
              <input type="password" id='password' placeholder='nhập mật khẩu' />
            </div>
            <div>
            <Button size="100%" title="Login" type="primary"></Button>
            </div>
            <div className='mt-3 d-flex justify-content-between'>
              <Link to="/">Quay về trang chủ</Link>
              <Link>Quên mật khẩu</Link>
            </div>
           {/* <Button title="Login" type="primary"></Button> */}
          </form>
        </div>
        <Footer/>
    </>
  )
}
