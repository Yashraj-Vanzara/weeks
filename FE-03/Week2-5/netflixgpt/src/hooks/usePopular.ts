import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { options, popular_url } from "../constants/constant";

export default function usePopular() {
  const dispatch=useDispatch()
  // Api call 
const getPopular= async ()=>{

    const res=await fetch(popular_url,options)
    const json=await res.json()
    dispatch(addPopularMovies(json.results))


  }
  useEffect(()=>{
    getPopular()
  },[])
}
