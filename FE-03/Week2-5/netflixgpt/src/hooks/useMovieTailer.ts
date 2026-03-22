import { useDispatch } from "react-redux"
import { options } from "../constants/constant"
import { addTrailer } from "../utils/movieSlice"
import { useEffect } from "react"

export default function useMovieTailer(id:number){
  
 const dispatch=useDispatch()
 
   const getVideo= async ()=>{

    const response=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,options)
    const json=await response.json()

  
    //@ts-expect-error:nothing
    const filterdata=json.results.filter(vid=>vid.type==="Trailer")
    const movtrailer=filterdata.length?filterdata[0] : json.results[0]
    dispatch(addTrailer(movtrailer))
  
   }

   useEffect(()=>{
    getVideo()
   },[])
}