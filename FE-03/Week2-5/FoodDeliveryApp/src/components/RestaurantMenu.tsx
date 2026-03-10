import { useEffect, useState } from "react";
// @ts-ignore
import { useRestaurantMenu } from "../utils/hooks/useRestaurantMenu.js";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import ResCategory from "./ResCategory.js";
import { CDN_URL } from "../utils/constants.js";

const RestaurantMenu = () => {
  const [showindex,setshowindex]=useState(null)
  const { id } = useParams();

  const resinfo = useRestaurantMenu(id);
  if (resinfo === null) return <Shimmer />;

  const info = resinfo?.cards?.[2]?.card?.card?.info;
  // console.log("info", info);
  const {
    name,
    cuisines = [],
    costForTwoMessage,
    avgRating,
    cloudinaryImageId,
    backgroundImage,
    logo,
  } = info ?? {};

  const itemCards =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
      ?.itemCards ?? [];
  const categories =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card: any) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );
  // console.log("categories", categories);

  return (
    <div className="text-center">
      <div className="flex justify-between  gap-10 w-6/12 mx-auto text-left">
        {" "}
        <div>
        <h1 className="font-black text-2xl text-slate-900 mb-2">{name}</h1>
        <h2 className="font-semibold text-md text-slate-500">
          {cuisines.join(", ")}
        </h2>
        </div>
        <div>
        {" "}
        <img src={CDN_URL +logo } alt="" className="w-[120px] h-auto object-cover" />
      </div>
      </div>
      

      {categories.map((category: any,index:any) => (
        <ResCategory
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
          show={index === showindex && true}
          setshowindex={()=>setshowindex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
