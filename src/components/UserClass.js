import React from "react";
import Shimmer from "./Shimmer";

import UserContext from "../utils/UserContext";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  async componentDidMount() {
    // API call
    console.log("i am mounted");

    const user = await fetch("https://api.github.com/users/lakshaykalra");

    const data = await user.json();

    console.log("user", data);

    this.setState({
      user: data,
    });
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    console.log("i am rendering");
    return Object.keys(this.state.user).length > 0 ? (
      <div className="user">
        <img src={this.state.user.avatar_url}></img>
        <h2>Name:{this.state.user.name}</h2>
        <h3>Bio:{this.state.user.bio}</h3>
        <h4>
          LoggedIn User
          <UserContext.Consumer>
            {(data)=> data.loggedInUser}
          </UserContext.Consumer>
        </h4>
      </div>
    ) : (
      <Shimmer />
    );
  }
}
