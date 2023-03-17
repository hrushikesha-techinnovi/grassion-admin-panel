import React from 'react'
import { FaUser } from "react-icons/fa"
import "../assets/styles/header.css"

const Header = () => {
  return (
    <div className='topbar shadow-sm position-sticky'>
      <div className='user'>
        <FaUser className='user_icon' />
      </div>
    </div>
  )
}

export default Header