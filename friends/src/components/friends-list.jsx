import React from "react";
import Loader from "react-loader-spinner";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./friend";

class FriendsList extends React.Component {
  state = {
    loading: false,
    friends: [],
    newFriend: {
      name: "",
      age: "",
      email: ""
    }
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
      console.log('friends', this.state.friends)
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state.newFriend);
    axiosWithAuth()
      .post("/api/friends", this.state.newFriend)
      .then(res => console.log(res))
      .catch(err => console.log(err.message));
    //   this.setState({loading: true})
      this.getData();
  };

  handleChanges = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.newFriend);
  };

  render() {
    return (
      <div className="friends">
        <form className="friend-form" onSubmit={this.handleSubmit}>
          <p>Add a New Friend</p>
          <input
            type="text"
            name="name"
            value={this.state.newFriend.name}
            placeholder="Name"
            onChange={this.handleChanges}
          />
          <input
            type="text"
            name="age"
            value={this.state.newFriend.age}
            placeholder="Age"
            onChange={this.handleChanges}
          />
          <input
            type="text"
            name="email"
            value={this.state.newFriend.email}
            placeholder="Email"
            onChange={this.handleChanges}
          />
          <button className="add-btn">Add Friend</button>
        </form>

        {this.state.friends.map(friend => {
          return <Friend friend={friend} />;
        })}
        {this.state.loading && (
          <Loader
            type="Puff"
            color="#f0f0f0"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
      </div>
    );
  }
}

export default FriendsList;
