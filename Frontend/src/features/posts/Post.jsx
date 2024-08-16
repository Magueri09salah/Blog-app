import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchPostById } from './postsSlice';
import {useParams} from 'react-router-dom'
import OnePost from '../../components/OnePost';



export const Post = () => {
    const {id} = useParams()
    const dispatch = useDispatch();

    const post = useSelector(state => state.posts.posts.find(post => post._id === id));

    // const post = useSelector(state => state.posts.posts);
    const status = useSelector(state => state.posts.status)
    const error = useSelector(state => state.posts.error)

    useEffect(()=>{
        dispatch(fetchPostById(id));
    },[id]);

    console.log('Post:', post);

    if (status === 'loading') {
      return <p>Loading...</p>;
    }
  
    if (status === 'failed') {
      return <p>Error: {error}</p>;
    }
  
    if (!post) {
      return <p>No post found</p>;
    }

    // console.log(post);

  return (
    <div>
    {/* <p>{post._id}</p> */}
    
      {/* <OnePost 
        title = {post.title}
        content = {post.content}
        img = {post.img}
        createdAt = {post.createdAt}
      /> */}
      <div>
      <p>{post._id}</p>
      <p>{post.title}</p>
      <p>{post.content}</p>
      <p>{post.img}</p>
      <p>{post.createdAt}</p>
    </div>
    </div>
  )
}


