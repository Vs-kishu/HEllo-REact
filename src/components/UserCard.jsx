import React from "react";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {},
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/vs-kishu");
    const json = await data.json();
    this.setState({ userinfo: json });
  }
  render() {
    const { name, location, avatar_url } = this.state.userinfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h3>Location : {location}</h3>
      </div>
    );
  }
}

export default UserCard;
