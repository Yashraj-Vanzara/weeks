import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import ItemList from "./ItemList.js";
import { useState } from "react";
const ResCategory = ({ data,show,setshowindex }) => {
  // const[show,setshow]=useState(false)
 
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 p-4 shadow-md hover:shadow-xl cursor-pointer bg-slate-100 " onClick={()=>{
        setshowindex()
      }}>
        <div className="flex justify-between">
        <span className="text-xl font-semibold">{data.title}({data.itemCards.length})</span>
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
