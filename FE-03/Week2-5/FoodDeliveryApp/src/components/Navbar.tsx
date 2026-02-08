import { useState } from "react"
import { Link } from "react-router-dom"
import useIsOnline from "../utils/useIsOnline"

const Navbar: React.FC = () => {
  const[btnname,setbtnname]=useState("Login")
  const status=useIsOnline()
  return (
    <div className="Navbar">
        <ul className="flex items-center justify-center gap-6 cursor-pointer">
          <li>online Status:{status ? "online":"offline"}</li>
          <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/contact">Contact</Link></li>
  <li><Link to="/cart">Cart</Link></li>
  <li><Link to="/grocery">Grocery</Link></li>
            <button onClick={() => {
  if (btnname === "Login") {
    setbtnname("Logout");
  } else {
    setbtnname("Login");
  }
}}
 style={{padding:"2px 10px",backgroundColor:"transparent",cursor:"pointer"}}>{btnname}</button>
        </ul>
    </div>
  )
}

export default Navbar