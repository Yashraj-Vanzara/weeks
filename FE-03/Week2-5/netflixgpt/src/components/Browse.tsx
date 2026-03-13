import { useEffect } from "react"
import Header from "./Header"
import { options,url } from "../constants/constant"


const Browse = () => {
  // Api call 
const getNowPlaying= async ()=>{

    const res=await fetch(url,options)
    const json=await res.json()
    console.log("Now playing",json)

  }
  useEffect(()=>{
    getNowPlaying()
  },[])

  
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse