import React from 'react'
import { Link } from 'react-router-dom'
import './PostCard.css'

export default function PostCard(props) {
console.log(props)

  return (
    
      <div className='postCard'>
      <img className='imgURL' src={props.imgURL} />
      <div className='title' a href={props.buyLink}>{props.title}</div>
      <div className='author'>{props.author}</div>
      </div>
    
  )
}
