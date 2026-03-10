import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name:"Dummy",
        avatar_url:"dummy-mg",
        bio:"dummmy"
        
      },
    };
  }
 async  componentDidMount(){
     const data=await fetch("https://api.github.com/users/Yashraj-Vanzara")
     const json=await data.json()
     this.setState({
        user:json
     })
  }
  render() {
    const { name, bio,avatar_url } = this.state.user;
    // return jsx
    return (
      <div className="min-h-screen bg-orange-50/30 flex items-center justify-center px-4">
        <div className="w-full h-full max-w-sm rounded-2xl border border-orange-100 bg-white p-6 text-center shadow-lg">
          <img
            src={avatar_url}
            alt={name}
            className="mx-auto h-28 w-28 rounded-full border-4 border-orange-200 object-cover"
          ></img>
          <h2 className="mt-4 text-xl font-bold text-gray-800">Name: {name}</h2>
          <h4 className="mt-2 text-sm leading-relaxed text-gray-600">Bio: {bio}</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
