import { useState } from "react"
import { Link } from "react-router-dom"


const Navbar: React.FC = () => {
  const[btnname,setbtnname]=useState("Login")
  return (
    <div className="Navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/contact">Contact</Link></li>
  <li><Link to="/cart">Cart</Link></li>
            <button onClick={()=>{
              btnname==="Login"?setbtnname("Logout"):setbtnname("Login")
            }} style={{padding:"2px 10px",backgroundColor:"transparent",cursor:"pointer"}}>{btnname}</button>
        </ul>
    </div>
  )
}

export default Navbar