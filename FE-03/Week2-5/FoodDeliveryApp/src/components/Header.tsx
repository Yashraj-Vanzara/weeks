import React from "react"
import Logo from "./Logo"
import Navbar from "./Navbar"


const Header: React.FC = () => {
  return (
    <div className="flex  overflow-hidden justify-around items-center h-16 bg-amber-50 py-4">
      <Logo/>
      <Navbar/>
    </div>
  )
}

export default Header