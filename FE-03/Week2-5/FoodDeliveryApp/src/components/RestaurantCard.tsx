
type RestaurantCardProps = {
    Name: string;
    cuisine: string;
    rating: number;
    imageUrl: string;
};
const RestaurantCard: React.FC<RestaurantCardProps> = (props) => {
  return (
    <div className="w-50 p-4 h-100 bg-slate-100 rounded-2xl flex flex-col gap-2 hover:shadow-2xl cursor-pointer ">
        <img className="rounded-xl" src={props.imageUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRexBia36ixX_U4FoPlg0iqv2hZIvfRyeH8LQ&s"} alt="image" />
        <h3 className="font-bold"> {props.Name || "Meghna"}</h3>
        <p>{props.cuisine || "North Indian, Chinese"}</p>
        <p>Rating: {props.rating || 4.5} ⭐</p>
    </div>
  )
}

export default RestaurantCard