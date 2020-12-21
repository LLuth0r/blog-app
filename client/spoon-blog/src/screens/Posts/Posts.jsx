import "./Posts.css";
import { getProducts } from "../../services/posts";
import axios from "axios"
import { useEffect, useState } from "react";

function Posts() {

  // ************************************************************ make this a service in services dir
  let [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  // get posts
  useEffect(() => {
    const getPosts = async () => {
      await axios
        .get("https://unit3-blog-app.herokuapp.com/posts")
        .then((response) => {
          setPosts(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(`Error: ${error}`);
        });
    };
    getPosts();
  }, [toggleFetch]);
  return null;
}

export default Posts;
