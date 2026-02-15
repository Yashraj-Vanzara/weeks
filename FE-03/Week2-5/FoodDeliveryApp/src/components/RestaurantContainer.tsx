import React, { useEffect, useState } from "react";
import RestaurantCard ,{withOpenLabel} from "./RestaurantCard";
// import { mockData } from "../utils/mockData.js";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const RestaurantContainer: React.FC = () => {
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
const RestaurantCardLabel=withOpenLabel(RestaurantCard)
  async function fetchData() {
    try {
      const resp = await fetch(
        "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING",
      );
      const json = await resp.json();
      console.log("json",json)

      let restaurants: any[] =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setList(restaurants);
    } catch (error) {
      console.error("Fetch error, falling back to mockData:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="flex items-center justify-between p-6 flex-wrap gap-2">
        {(list || []).length === 0 ? (
          <div>No restaurants found.</div>
        ) : (
          (list ).map((item: any, idx: number) => {
            const info = item?.info ?? item;
            const cuisines = Array.isArray(info.cuisines)
              ? info.cuisines.join(", ")
              : "";
            const imageId = info?.cloudinaryImageId ?? "";

            return (
              <Link    key={info?.id || idx} to={"/restaurants/"+info.id}>
                { info.isOpen ? (<RestaurantCardLabel Name={info?.name ?? "Unknown"}
                cuisine={cuisines}
                rating={info?.avgRating ?? info?.avgRatingString ?? "NA"}
                imageUrl={CDN_URL + imageId}/>): (
                   <RestaurantCard
              
                Name={info?.name ?? "Unknown"}
                cuisine={cuisines}
                rating={info?.avgRating ?? info?.avgRatingString ?? "NA"}
                imageUrl={CDN_URL + imageId}
              /> 
                )}
              
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default RestaurantContainer;
