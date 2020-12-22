import { getPosts } from "../../services/posts"
import { useState, useEffect } from "react"
import PostCard from '../PostCard/PostCard'


function PostCards () {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const postsResponse = async () => {
      const response = await getPosts()
      console.log(response)
      setPosts(response) 
    }
    postsResponse()
  }, [])

  const CARDS = posts.map((post, index) =>
    index < 8 ? <PostCard _id={post._id} title={post.title} imgURL={post.imgURL} content={post.content} author={post.author} key={index} /> : <h1>loading...</h1>
  )

  return (
    <div>
      {CARDS}
    </div>
  )

}

export default PostCards