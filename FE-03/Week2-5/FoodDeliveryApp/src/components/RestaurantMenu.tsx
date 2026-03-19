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
    <div className="px-4 py-4 text-center sm:px-6 md:px-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 text-left flex-row sm:items-center sm:justify-between sm:gap-8">
        {" "}
        <div>
        <h1 className="font-black text-2xl text-slate-900 mb-2">{name}</h1>
        <h2 className="font-semibold text-md text-slate-500">
          {cuisines.join(", ")}
        </h2>
        </div>
        <div className="self-start sm:self-auto">
        {" "}
        <img src={CDN_URL +logo } alt="" className="h-auto w-20 object-cover sm:w-24 md:w-[120px]" />
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
