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
    <div className="flex w-full flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 md:px-10 lg:px-16">
      <div className="logocontainer">
        <img className="h-16 w-auto sm:h-20" src={LOGO_URL} alt="logo" />
      </div>
      <div >
        <ul className="flex flex-wrap items-center justify-center gap-3 text-sm cursor-pointer text-purple-900 font-semibold sm:justify-end sm:gap-5 sm:text-base">
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
