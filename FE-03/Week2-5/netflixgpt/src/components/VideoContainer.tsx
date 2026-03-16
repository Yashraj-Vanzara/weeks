import { useEffect } from "react"
import { options } from "../constants/constant"


//@ts-expect-error : if not number
const VideoContainer = ({id}) => {
  //@ts-expect-error : if not number
   const getVideo= async (id)=>{
console.log("infn",id)
    const response=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,options)
    const json=await response.json()

    console.log("video",json)
    //@ts-expect-error:nothing
    const filterdata=json.results.filter(vid=>vid.type==="Trailer")
    const movtrailer=filterdata.length?filterdata[0] : json.results[0]
    console.log("fd",filterdata,movtrailer)
   }

   useEffect(()=>{
    getVideo(id)
   },[])
  return (
    <div className="w-full h-screen">
      <video className="w-full " src="https://www.youtube.com/watch?v=AFuE1LRxm80" autoPlay loop ></video>
    </div>
  )
}

export default VideoContainer  