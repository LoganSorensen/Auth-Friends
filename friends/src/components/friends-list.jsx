import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./friend";

class FriendsList extends React.Component {
  state = {
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

  componentDidUpdate() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(
        res =>
          //res.data
          this.setState({ friends: res.data })
        // console.log(res)
      )
      .catch(err => console.log(err));
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.newFriend);
    axiosWithAuth()
      .post("/api/friends", this.state.newFriend)
      .then(res => console.log(res))
      .catch(err => console.log(err.message));
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
      <div className='friends'>
        <form className='friend-form' onSubmit={this.handleSubmit}>
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
          <button className='add-btn'>Add Friend</button>
        </form>
        {this.state.friends.map(friend => {
          return <Friend friend={friend} />;
        })}
      </div>
    );
  }
}

export default FriendsList;
