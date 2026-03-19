import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import ItemList from "./ItemList.js";
import { useState } from "react";
const ResCategory = ({ data,show,setshowindex }) => {
  // const[show,setshow]=useState(false)
 
  return (
    <div>
      {/* Header */}
      <div className="mx-auto my-4 w-full max-w-3xl cursor-pointer bg-slate-100 p-3 shadow-md hover:shadow-xl sm:p-4" onClick={()=>{
        setshowindex()
      }}>
        <div className="flex justify-between">
        <span className="text-base font-semibold sm:text-lg md:text-xl">{data.title}({data.itemCards.length})</span>
        <span>▼</span></div>
        <div>
     {show &&    <ItemList card={data.itemCards}/>}
      </div>
      </div>
      {/* Body */}
     
    </div>
  );
};

export default ResCategory;
