import { useSelector } from "react-redux"
import useMovieTailer from "../hooks/useMovieTailer"



//@ts-expect-error : if not number
const VideoContainer = ({id}) => {
  // @ts-expect-error if not store
   const trailer=useSelector((store)=>store.movie?.nowPlayingTailer)
   useMovieTailer(id)
 
  return (
    <div className="w-full h-auto lg:h-screen">
      <iframe className="w-screen aspect-video" src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`} title="YouTube video player" allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoContainer  