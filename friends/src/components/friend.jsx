import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const handleDelete = e => {
  // console.log(e.target.value)
  e.preventDefault();
  axiosWithAuth()
    .delete(`/api/friends/${e.target.value}`)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

const handleEdit = e => {
  e.preventDefault();
  axiosWithAuth()
    .put()
    .then(res => console.log(res))
    .catch(err => console.log(err))
};

const Friend = props => {
  return (
    <div className="friend-card">
      <h3>{props.friend.name}</h3>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
      <div className='btn-cont'>
        <button
          className="edit-btn"
          value={props.friend.id}
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="delete-btn"
          value={props.friend.id}
          onClick={handleDelete}
        >
          Delete Friend
        </button>
      </div>
    </div>
  );
};

export default Friend;
