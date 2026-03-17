import { useEffect } from "react";
import {   addUpcomingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { options, upcoming_url } from "../constants/constant";

export default function useUpcoming() {
  const dispatch=useDispatch()
  // Api call 
const getUpcoming= async ()=>{

    const res=await fetch(upcoming_url,options)
    const json=await res.json()
    dispatch(addUpcomingMovies(json.results))


  }
  useEffect(()=>{
    getUpcoming()
  },[])
}
