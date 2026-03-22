import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { options, url } from "../constants/constant";

export default function useNowPlaying() {
  const dispatch=useDispatch()
  // Api call 
const getNowPlaying= async ()=>{

    const res=await fetch(url,options)
    const json=await res.json()

    dispatch(addNowPlayingMovies(json.results))


  }
  useEffect(()=>{
    getNowPlaying()
  },[])
}
