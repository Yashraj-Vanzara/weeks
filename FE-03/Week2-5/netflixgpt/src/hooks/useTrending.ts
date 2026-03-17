import { useEffect } from "react";
import {  addTrendingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { options, trending_url } from "../constants/constant";

export default function useTrending() {
  const dispatch=useDispatch()
  // Api call 
const getTrending= async ()=>{

    const res=await fetch(trending_url,options)
    const json=await res.json()
    dispatch(addTrendingMovies(json.results))


  }
  useEffect(()=>{
    getTrending()
  },[])
}
