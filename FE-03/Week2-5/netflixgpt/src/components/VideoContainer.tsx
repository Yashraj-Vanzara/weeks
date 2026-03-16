import { useEffect } from "react"
import { options } from "../constants/constant"
import { useDispatch, useSelector } from "react-redux"
import { addTrailer } from "../utils/movieSlice"


//@ts-expect-error : if not number
const VideoContainer = ({id}) => {
  const dispatch=useDispatch()
   //@ts-expect-error :if not store
  const strore=useSelector((store)=>store.movie?.nowPlayingTailer)
  //@ts-expect-error : if not number
   const getVideo= async (id)=>{
console.log("infn",id)
    const response=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,options)
    const json=await response.json()

    console.log("video",json)
    //@ts-expect-error:nothing
    const filterdata=json.results.filter(vid=>vid.type==="Trailer")
    const movtrailer=filterdata.length?filterdata[0] : json.results[0]
    dispatch(addTrailer(movtrailer))
    console.log("fd",filterdata,movtrailer)
   }

   useEffect(()=>{
    getVideo(id)
   },[])
  return (
    <div className="w-full h-screen">
      <iframe className="w-screen h-screen" src={`https://www.youtube.com/embed/${strore?.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoContainer  