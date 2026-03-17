
import useNowPlaying from "../hooks/useNowPlaying"
import usePopular from "../hooks/usePopular"
import useTrending from "../hooks/useTrending"
import useUpcoming from "../hooks/useUpcoming"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"



const Browse = () => {

useNowPlaying()
usePopular()
useTrending()
useUpcoming()
  
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse