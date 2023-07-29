import React from "react";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      point: 1,
    };
    console.log(this.props.name + "constructor"); // called only once when component is created and mounted to the DOM
  }
  componentDidMount() {
    console.log(this.props.name + "usr mounted");
  }
  render() {
    const { score, point } = this.state;
    console.log(this.props.name + "render");
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h3>Location : ballia</h3>
        <p>your score :{score} </p>
        <p>your point : {point}</p>
        <button
          onClick={() => {
            this.setState({
              score: score + 1,
              point: point * 3,
            });
          }}
        >
          increase score
        </button>
      </div>
    );
  }
}

export default UserCard;
