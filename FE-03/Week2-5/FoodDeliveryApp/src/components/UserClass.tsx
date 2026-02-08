import type { ReactNode } from "react"
import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state={
            count:0,
            
        }
    }
    render(): ReactNode {
        const{count}=this.state
        return (
            <div>
                <p>{count}</p>
              <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
              }}>Increase Count</button>
                <h2>{this.props.name}</h2>
                <p>Location</p>
                <h2>Email</h2>
            </div>
        )
    }
}

export default UserClass