import RestaurantCard, { withisOpenLabel } from "./RestaurantCard";

// @ts-ignore

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listofrestaurant, setlistofrestaurant] = useState<any[]>([]);
  const [filteredrestaurant, setfilteredrestaurant] = useState<any[]>([]);
  const [searchtext, setsearchtext] = useState<string>("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    // console.log("data", json);
    const r =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setlistofrestaurant(r);
    setfilteredrestaurant(r);
    // console.log("data", json);
  };
  const WithisOpenLabelCard=withisOpenLabel(RestaurantCard)
  return (
    <div className="w-full h-full px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
      <div className="mb-4 flex w-full flex-col gap-2 sm:flex-row sm:items-center md:gap-3">
        <div className="Search flex w-full items-center gap-2 sm:flex-1">
          <input
          className="w-fit min-w-0 rounded-md border px-2 py-1 text-sm outline-none md:text-base"
            type="text"
            data-testid="SearchInput"
            value={searchtext}
            placeholder="Search the Restaurant"
            onChange={(e) => setsearchtext(e.target.value)}
          />
          <button
          className="shrink-0 cursor-pointer rounded-sm border bg-purple-200 px-2 py-1 text-xs whitespace-nowrap sm:text-sm md:text-base"
            onClick={() => {
              const filteredData = listofrestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase()),
              );
              setfilteredrestaurant(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            // @ts-ignore
            const filterdata = listofrestaurant.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setfilteredrestaurant(filterdata);
            //    setlistofrestaurant(listofrestaurant  .filter(res=>res.restaurants.info.avgRating>4.7))
          }}
          className="w-fit cursor-pointer rounded-sm border bg-purple-100 px-2 py-1 text-xs whitespace-nowrap sm:w-auto sm:text-sm md:text-base"
        >
          Top Rated Restaurants
        </button>
      </div>
      {listofrestaurant.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {filteredrestaurant.map((restaurant: any) => (
            <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
              {restaurant.info.isOpen?(
                <WithisOpenLabelCard resdata={restaurant}/>
              ):(
                <RestaurantCard resdata={restaurant} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;

// useEffect is  rendered after component is rendered then the componet will call useEffect
