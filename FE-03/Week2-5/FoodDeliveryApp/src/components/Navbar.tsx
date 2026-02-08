import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Navbar: React.FC = () => {
  const[btnname,setbtnname]=useState("Login")
  const navigate=useNavigate()
  return (
    <div className="Navbar">
        <ul>
            <li onClick={()=>{navigate("/")}}>Home</li>
            <li onClick={()=>{navigate("/about")}}>About</li>
            <li onClick={()=>{navigate("/contact")}}>Contact</li>
            <li>Cart</li>
            <button onClick={()=>{
              btnname==="Login"?setbtnname("Logout"):setbtnname("Login")
            }} style={{padding:"2px 10px",backgroundColor:"transparent",cursor:"pointer"}}>{btnname}</button>
        </ul>
    </div>
  )
}

export default Navbar