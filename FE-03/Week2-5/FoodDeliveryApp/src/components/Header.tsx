import { useContext, useState } from "react";
// @ts-ignore
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
// @ts-ignore
import UserContext from "../utils/UserContext.js"
// @ts-ignore
import useIsOnline from '../utils/hooks/useIsOnline.js'
import { useSelector } from "react-redux";
const Header: React.FC = () => {
  const [isloggedin, setisloggedin] = useState(false);
  const isOnline=useIsOnline()
  const selector=useSelector((store)=> store.cart.items)
 
  const {loggedInUser}=useContext(UserContext)
 
  return (
    <div className="flex w-full h-14 px-28 py-12 justify-between items-center">
      <div className="logocontainer">
        <img className="w-38 h-32" src={LOGO_URL} alt="logo" />
      </div>
      <div >
        <ul className="flex  items-center gap-8  cursor-pointer text-purple-900 font-semibold">
          <li>
            {
              isOnline?"🟢":"🔴"
            }
          </li>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/grocery">Grocery</Link>
          <Link to="/cart">Cart{selector.length}</Link>
     
          <li >
            {isloggedin ? (
              <button className="btn cursor-pointer border rounded-md px-2 bg-purple-200 " onClick={() => setisloggedin(false)}>Logout</button>
            ) : (
              <button className="btn cursor-pointer border rounded-md px-2 bg-purple-200 " onClick={() => setisloggedin(true)}>Login</button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
