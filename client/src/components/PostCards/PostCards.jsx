import { getPosts } from "../../services/posts"
import { useState } from "react"


function PostCards(){

  const [posts, setPosts] = useState([])
  const posts = await getPosts()
  setPosts(posts)

  const CARDS = posts.reverse().map((post, index) =>
  index < 8 ? <PostCard _id={post._id} name={post.title} imgURL={post.imgURL} content={post.content} key={index} /> : <h1>loading...</h1>
  )

  return (
    <div>
      {CARDS}
    </div>
  )

}

export default PostCards