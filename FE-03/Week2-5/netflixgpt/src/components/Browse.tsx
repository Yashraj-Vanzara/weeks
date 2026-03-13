
import useNowPlaying from "../hooks/useNowPlaying"
import Header from "./Header"



const Browse = () => {

useNowPlaying()
  
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse