// @ts-ignore
import { CDN_URL } from "../utils/constants.js";
interface RestaurantCardProps {
  resdata: {
    info: {
      name: string;
      cuisines: string[];
      avgRating: number;
      sla: {
        slaString: string;
      };
      cloudinaryImageId?: string;
    };
  };
}

const RestaurantCard = ({ resdata }: RestaurantCardProps) => {
  const { name, cuisines, avgRating, sla } = resdata.info;
  return (
    <div data-testid="res" className="res-card w-[350px] auto bg-[#f1f1f1] rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300 hover:scale-[1.02] cursor-pointer">
      <img
      className="w-full object-cover h-[350px]"
        src={
          CDN_URL +
          resdata.info.cloudinaryImageId
        }
        alt={name}
      />
      <h3 className="text-xl font-bold whitespace-nowrap text-ellipsis overflow-clip">{name}</h3>
      <h4 className="text-lg text-gray-600 whitespace-nowrap text-ellipsis overflow-clip">{cuisines.join(", ")}</h4>
      <h4 className="text-lg font-semibold">{avgRating} Stars</h4>
      <h4 className="text-md text-gray-500">{sla.slaString}</h4>
    </div>
  );
};

// @ts-ignore
export const withisOpenLabel=(RestaurantCard)=>{
  // @ts-ignore
  return (props)=>{
    return (
      <div >
        <label className="absolute z-999 border border-slate-200 bg-black text-white px-2">Open </label>
      <RestaurantCard {...props}/>
      </div>
    )
  }
}
export default RestaurantCard;