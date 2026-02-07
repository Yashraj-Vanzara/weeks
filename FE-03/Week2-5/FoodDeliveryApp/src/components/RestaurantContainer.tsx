import RestaurantCard from "./RestaurantCard";
import { mockData } from "../utils/mockData.js";
import { CDN_URL } from "../utils/constants";

const RestaurantContainer: React.FC = () => {
  return (
    <div className="RestaurantContainer">
      {mockData.resList.map((data, idx) => (
        <RestaurantCard
          key={data.info.id || idx}
          Name={data.info.name}
          cuisine={data.info.cuisines.join(", ")}
          rating={data.info.avgRating}
          imageUrl={CDN_URL + data.info.cloudinaryImageId}
        />
      ))}
    </div>
  );
};

export default RestaurantContainer;