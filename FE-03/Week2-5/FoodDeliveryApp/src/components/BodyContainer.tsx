import RestaurantContainer from "./RestaurantContainer"
import SearchBar from "./SearchBar"
import TopRatedBtn from "./TopRatedBtn"


const BodyContainer: React.FC = () => {
  return (
    <div className="Body">
        <SearchBar/>
        <TopRatedBtn/>
        <RestaurantContainer/>
    </div>
  )
}

export default BodyContainer