import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../components/Navber/Navber'

function MainLayout() {
  return (
    <div className='max-w-[1300px] mx-auto'>
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  )
}

export default MainLayout