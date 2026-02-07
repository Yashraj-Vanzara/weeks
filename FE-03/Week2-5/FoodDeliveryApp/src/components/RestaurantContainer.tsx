import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import { mockData } from "../utils/mockData.js";
import { CDN_URL } from "../utils/constants";

const RestaurantContainer: React.FC = () => {
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchData() {
    try {
      const resp = await fetch(
        "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await resp.json();
      console.log("api json:", json);

      // Try expected path first
      let restaurants: any[] =
        json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ??
        [];

      // If not found, search cards for any restaurants arrays
      if (!Array.isArray(restaurants) || restaurants.length === 0) {
        const fromCards =
          (json?.data?.cards || []).flatMap((c: any) => {
            const r = c?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            return Array.isArray(r) ? r : [];
          }) || [];
        restaurants = fromCards;
      }

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
    return <div>Loading restaurants...</div>;
  }

  return (
    <>
      <div className="RestaurantContainer">
        {(list || []).length === 0 ? (
          <div>No restaurants found.</div>
        ) : (
          (list || []).map((item: any, idx: number) => {
            // item may be { info: {...} } or sometimes an object itself
            const info = item?.info ?? item ?? {};
            const cuisines = Array.isArray(info.cuisines) ? info.cuisines.join(", ") : "";
            const imageId = info?.cloudinaryImageId ?? "";

            return (
              <RestaurantCard
                key={info?.id || idx}
                Name={info?.name ?? "Unknown"}
                cuisine={cuisines}
                rating={info?.avgRating ?? info?.avgRatingString ?? "NA"}
                imageUrl={CDN_URL + imageId}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default RestaurantContainer;