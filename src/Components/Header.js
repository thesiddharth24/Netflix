import React from 'react'
import Logo from './../Utils/logo.png';


function Header() {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10">
        <img 
        className="w-44"
        src={Logo} 
        alt="logo" 
        />
    </div>
  )
}

export default Header