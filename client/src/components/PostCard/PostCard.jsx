import React from "react";
import "./PostCard.css";

export default function PostCard(props) {
  console.log(props);

  return (
    <div className="postCard">
      <img className="imgURL" src={props.imgURL} alt="" />
      <div className="title" href={props.buyLink}>
        {props.title}
      </div>
      <div className="author">{props.author}</div>
    </div>
  );
}
