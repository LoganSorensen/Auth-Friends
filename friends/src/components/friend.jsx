import React from "react";

const Friend = props => {
  return (
    <div className='friend-card'>
      <h3>{props.friend.name}</h3>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
      <button className='delete-btn'>Delete Friend</button>
    </div>
  );
};

export default Friend;
