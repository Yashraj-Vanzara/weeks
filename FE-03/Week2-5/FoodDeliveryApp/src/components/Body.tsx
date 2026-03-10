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
    <div className=" w-full h-full   px-12 py-14  ">
      <div className="flex w-fit mb-2 items-center gap-2 py -6">
        <div className="Search">
          <input
          className="outline-none px-2 py-1 border rounded-md mr-2"
            type="text"
            data-testid="SearchInput"
            value={searchtext}
            placeholder="Search the Restaurant"
            onChange={(e) => setsearchtext(e.target.value)}
          />
          <button
          className="bg-purple-200 cursor-pointer border rounded-sm px-2 py-1"
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
          className="bg-purple-100 cursor-pointer border rounded-sm px-2 py-1"
        >
          Top Rated Restaurants
        </button>
      </div>
      {listofrestaurant.length === 0 ? (
        <Shimmer />
      ) : (
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center ">
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
