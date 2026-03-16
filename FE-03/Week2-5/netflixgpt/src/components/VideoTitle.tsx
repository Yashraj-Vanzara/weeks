import { FaPlay } from "react-icons/fa6";
//@ts-expect-error : if not string
const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" absolute pt-[20%]  px-12 text-white bg-linear-to-r from-black to-transparent w-screen aspect-video ">
      <h1 className="capitalize font-bold text-5xl w-1/6 text-wrap mb-2">{title}</h1>
      <p className="text-xl text-left w-1/2 mb-6">{overview}</p>
      <div className="flex items-center gap-6 ">
        <button className="bg-white cursor-pointer px-14  text-black   text-xl  py-1 rounded-sm  flex justify-center items-center gap-2"><span><FaPlay /></span> Play</button>
        <button className="bg-slate-600/50 text-white px-8  text-xl rounded-sm py-1">More Info</button>
      </div> 
    </div>
  );
};

export default VideoTitle;
