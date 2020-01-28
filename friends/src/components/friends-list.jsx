import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./friend";

class FriendsList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res =>
        //res.data
        this.setState({friends: res.data}),
        // console.log(res)
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.friends.map(friend => {
          return <Friend friend={friend} />;
        })}
      </div>
    );
  }
}

export default FriendsList;
