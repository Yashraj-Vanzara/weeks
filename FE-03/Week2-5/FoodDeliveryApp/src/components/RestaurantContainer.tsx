import RestaurantCard from "./RestaurantCard";
import { mockData } from "../utils/mockData.js";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";

const RestaurantContainer: React.FC = () => {
  const[list,setlist]=useState(mockData.resList)
  return (<>
      <div className="bp">
        <button onClick={()=>{
          const filtered=mockData.resList.filter((e)=>e.info.avgRating>4)
          setlist(filtered)
        }} className="f-btn">Top Rated</button>
      </div>
    <div className="RestaurantContainer">
      {list.map((data, idx) => (
        <RestaurantCard
          key={data.info.id || idx}
          Name={data.info.name}
          cuisine={data.info.cuisines.join(", ")}
          rating={data.info.avgRating}
          imageUrl={CDN_URL + data.info.cloudinaryImageId}
        />
      ))}
    </div>
    </>
  );
};

export default RestaurantContainer;