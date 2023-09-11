import React from 'react'
import Sidebar from '../../layouts/admin/Sidebar/Sidebar'
import Header from '../../layouts/admin/Header/Header'

export default function HomeAdmin() {
  return (
    <>
        <div className='d-flex'>
        <Sidebar/>
        <div className=' d-flex flex-column'>
        <Header/>
        <h1>Trang chu</h1>
        </div>
        </div>
    </>
  )
}
