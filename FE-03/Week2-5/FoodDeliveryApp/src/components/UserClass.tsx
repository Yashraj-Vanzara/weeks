import type { ReactNode } from "react"
import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)
    }
    render(): ReactNode {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>Location</p>
                <h2>Email</h2>
            </div>
        )
    }
}

export default UserClass