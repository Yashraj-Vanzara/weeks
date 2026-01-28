import { useState } from "react";


const Counter = () => {
    const [count,setCount]=useState<number>(0);
  return (
    <div>
        <p>Chai Orders:{count}</p>
        <button onClick={()=>{setCount(count+1)}}>Order More</button>
    </div>
  )
}

export default Counter