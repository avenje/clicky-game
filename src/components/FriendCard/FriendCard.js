import React from "react";
import "./FriendCard.css";

const FriendCard = (props) => {
  return (
  <div className="card">
    
    <div className="img-container" dataid={props.id} onClick={() => props.clickFriends(props.id)} >
      <img alt={props.name} src={props.image} />
    </div>
  </div>
  )
};

export default FriendCard;  

// {/* <div className="card"> */}
// <div className="img-container">
//   <img alt={props.name} src={props.image} />
// </div>
// <div className="content">
//   <ul>
//     <li>
//       <strong> {props.name} </strong>
//     </li>
//   </ul>
// </div>
// <span onClick={() => props.removeFriend(props.id)} className="remove">
//   X
// </span>
// </div>
