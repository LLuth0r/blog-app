import "./Posts.css";
import '../../components/PostCards/PostCards.css';
import { getProducts } from "../../services/posts";
import axios from "axios"
import Layout from '../../components/shared/Layout/Layout'
import PostCards from '../../components/PostCards/PostCards'

function Posts() {
  return (
    <Layout>
      <div className='cards'>
        <PostCards />
      </div>
      </Layout>
  )
}

export default Posts;
