import React from "react";
import "./PostCard.css";
import { Link } from "react-router-dom";

export default function PostCard(props) {
  console.log(props);

  return (
    <div className="postCard">
      <Link className="card" to={`/posts/${props._id}`}>
        <img className="imgURL" src={props.imgURL} alt="" />
      </Link>
      <div className="title" href={props.buyLink}>
        {props.title}
      </div>
      <div className="author">{props.author}</div>
    </div>
  );
}
