import React from "react"
import Logo from "./Logo"
import Navbar from "./Navbar"


const Header: React.FC = () => {
  return (
    <div className="Header">
      <Logo/>
      <Navbar/>
    </div>
  )
}

export default Header