import { useState } from "react"


const Navbar: React.FC = () => {
  const[btnname,setbtnname]=useState("Login")
  return (
    <div className="Navbar">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <button onClick={()=>{
              btnname==="Login"?setbtnname("Logout"):setbtnname("Login")
            }} style={{padding:"2px 10px",backgroundColor:"transparent",cursor:"pointer"}}>{btnname}</button>
        </ul>
    </div>
  )
}

export default Navbar