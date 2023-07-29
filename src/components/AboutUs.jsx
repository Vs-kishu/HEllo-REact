import React from "react";
import UserCard from "./UserCard";

class Aboutus extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent cons");
  }
  componentDidMount() {
    // console.log("parent mounted");
  }
  render() {
    // console.log("parent render");
    return (
      <>
        <h1>About Us Page</h1>
        <UserCard name={"First"} />
      </>
    );
  }
}

export default Aboutus;
