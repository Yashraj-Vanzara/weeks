import RestaurantContainer from "./RestaurantContainer"
import SearchBar from "./SearchBar"


const BodyContainer: React.FC = () => {
  return (
    <div className="Body">
        <SearchBar/>
        <RestaurantContainer/>
    </div>
  )
}

export default BodyContainer