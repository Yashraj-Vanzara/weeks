import React from "react"
import Logo from "./Logo"
import Navbar from "./Navbar"


const Header: React.FC = () => {
  return (
    <div className="flex justify-around items-center h-16 bg-red-300">
      <Logo/>
      <Navbar/>
    </div>
  )
}

export default Header