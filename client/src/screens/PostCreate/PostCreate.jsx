import "./PostCreate.css";
import React, { useState } from "react";
import { createPost } from "../../services/posts";
import { Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";

function PostCreate() {
  const [post, setPost] = useState({
    author: "",
    title: "",
    imgURL: "",
    content: "",
    buyLink: "",
  });
  console.log(post.author);

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createPost(post);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/`} />;
  }

  return (
    <Layout>
      <form className="form" onSubmit={handleSubmit} onChange={handleChange}>
        <input
          className="input"
          placeholder="Author"
          value={post.author}
          name="author"
          required
        />
        <input
          className="input"
          placeholder="Title"
          value={post.title}
          name="title"
          required
        />
        <input
          className="input"
          placeholder="Image Link"
          value={post.imgURL}
          name="imgURL"
          required
        />
        <input
          className="input"
          id="content"
          placeholder="Description"
          value={post.content}
          name="content"
          required
        />
        <input
          className="input"
          placeholder="Purchase Link"
          value={post.buyLink}
          name="buyLink"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </Layout>
  );
}

export default PostCreate;
