import "./PostDetail.css";
import Layout from "../../components/shared/Layout/Layout";
import { getPost, deletePost } from "../../services/posts";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function PostDetail(props) {
  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      console.log(post);
      setPost(post);
      setLoaded(true);
    };
    fetchPost();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout>
      <div className="product-detail">
        <img
          className="product-detail-image"
          src={post.imgURL}
          alt={post.title}
        />
        <div className="detail">
          <div className="title">{post.title}</div>
          <div className="author">{post.author}</div>
          <div className="content">{post.content}</div>
          <div className="button-container">
            <button
              className="delete-button"
              onClick={() => deletePost(post._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PostDetail;
