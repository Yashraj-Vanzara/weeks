import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"
import { auth } from "../utils/firebase";


const Header = () => {
  const navigate=useNavigate()
  const handleSignout=()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/")
}).catch((error) => {
 console.log(error)
});

  }
  return (
    <div className="px-16 py-10 absolute z-99 w-full flex justify-between bg-linear-to-b from-black to-transparent">
        <img className="w-44 h-auto  object-cover" src="/netflix.svg" alt="netflixlogo" />
        <div className="flex gap-2 p-2 items-center">
          <img src="/user-icon.png" alt="user" />
          <button onClick={handleSignout} className="bg-red-500 text-white px-2 py-1 rounded-md cursor-pointer">Sign Out</button>
        </div>
    </div>
  )
}

export default Header