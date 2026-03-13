import { useEffect } from "react"
import Header from "./Header"
import { options,url } from "../constants/constant"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice"


const Browse = () => {
  const dispatch=useDispatch()
  // Api call 
const getNowPlaying= async ()=>{

    const res=await fetch(url,options)
    const json=await res.json()
    console.log("Now playing",json.results)
    dispatch(addNowPlayingMovies(json.results))


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