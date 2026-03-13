import { FaPlay } from "react-icons/fa6";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" absolute top-1/2 px-12 ">
      <h1 className="capitalize font-bold text-5xl w-1/6 text-wrap">{title}</h1>
      <p className="text-xl text-left w-1/2">{overview}</p>
      <div className="flex items-center gap-6 ">
        <button className="bg-white cursor-pointer px-14     text-xl  py-1 rounded-sm  text-black flex justify-center items-center gap-2"><span><FaPlay /></span> Play</button>
        <button className="bg-slate-600/50 text-white px-8  text-xl rounded-sm py-1">More Info</button>
      </div> 
    </div>
  );
};

export default VideoTitle;
