import type { ReactNode } from "react"
import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state={
            count:0,
            count2:2
        }
    }
    render(): ReactNode {
        const{count,count2}=this.state
        return (
            <div>
                <p>{count}</p>
                <p>{count2}</p>
                <h2>{this.props.name}</h2>
                <p>Location</p>
                <h2>Email</h2>
            </div>
        )
    }
}

export default UserClass