import type React from "react"
import type { JSX } from "react"


const Heading:React.FC = (props:any) :JSX.Element => {
  return (
    <div id="container"><h1><>{props.Title}</></h1></div>
  )
}

export const Title:React.FC=():JSX.Element=>{
    return(<div>
            <h1>Im from title</h1>
        </div>
    )
}



export default Heading