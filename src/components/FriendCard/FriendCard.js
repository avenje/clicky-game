import React from "react";
import "./FriendCard.css";

const FriendCard = props => {
  return (
  <div className="card">
    
    <div className="img-container" dataid={props.id} onClick={() => props.clickFriends(props.id)} >
      <img alt={props.name} src={props.image} />
    </div>
  </div>
  )
};

export default FriendCard;