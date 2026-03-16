import { useSelector } from "react-redux"
import VideoContainer from "./VideoContainer"
import VideoTitle from "./VideoTitle"


const MainContainer = () => {
  //@ts-expect-error : if not store
     const movie=useSelector(store=>store.movie?.nowPlayingMovies)
    if(!movie) return
    const mainMovie=movie[0]
    console.log("movie",mainMovie)

    const {original_title,overview,id}=mainMovie
  return (
    <div >
        <VideoContainer id={id}/>
        <VideoTitle  title={original_title} overview={overview}/>
    </div>
  )
}

export default MainContainer