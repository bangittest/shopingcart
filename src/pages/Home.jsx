import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Button from '../components/base/botton/Button'

export default function Home() {
  return (
    <>
        <Navbar/>
        <h1>Day la trang chu</h1>
        <Button title="update" size={200} type="primary"/>
        <Footer/>
    </>
  )
}
