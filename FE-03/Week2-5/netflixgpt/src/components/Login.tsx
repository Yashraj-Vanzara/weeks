import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn,setSignIn]=useState(true)

  const toggleForm=()=>{
    setSignIn(!isSignIn)

  }
  return (
    <div className="relative h-screen w-full">
      <Header />
      <div className="absolute inset-0 bg-black/45 z-9" />
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/b9448d14-5983-4ffc-a4d6-e22223108466/web/IN-en-20260302-TRIFECTA-perspective_1ef91182-c674-4632-9bec-d185993ab154_large.jpg"
        alt=""
      />

      <form className=" rounded-sm flex flex-col gap-7 absolute top-1/2 left-1/2 z-100 w-3/12 -translate-x-1/2 -translate-y-1/2 bg-gray-900/80 p-12 text-white">
        <h1 className="text-2xl font-bold">{isSignIn?"Sign In":"Sign Up"}</h1>
        {!isSignIn &&   <input type="text" placeholder="Name" className="h-12 bg-white/10 texst-white px-2 rounded-sm" /> }
        <input type="email" placeholder="Email" className="h-12 bg-white/10 texst-white px-2 rounded-sm" />
        <input type="password" placeholder="Password" className="h-12   bg-white/10  text-white px-2 rounded-sm" />
        <button  type="submit" className="cursor-pointer bg-red-500/90 hover:bg-red-500/75 w-fit mx-auto py-1 px-3 rounded-sm ">Submit</button>
        <p onClick={toggleForm} className="cursor-pointer">{isSignIn?"New to Netflix ? SignUp Now":"Already registerd ? SignIn now"}</p>
      </form>
    </div>
  );
};

export default Login;
