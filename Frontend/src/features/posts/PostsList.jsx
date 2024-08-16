import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchPosts} from './postsSlice';
import { useEffect } from 'react';
import CardBlog from '../../components/CardBlog';
import HeroSection from '../../components/HeroSection';

export const PostsList = () => {
    const dispatch = useDispatch();

    
    const posts = useSelector(state => state.posts.posts)
    const status = useSelector(state => state.posts.status)
    const error = useSelector(state => state.posts.error)
    useEffect(() => {
        dispatch(fetchPosts());
        // dispatch(fetchPostById()); 

      }, []);

      // console.log(posts);

    return (
        <section className="posts-list">
        <HeroSection />
        {/* <p>{posts.title}</p> */}
          
          {posts.length > 0 ? (
            <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map(post => (
                <li className="w-full mx-auto group sm:max-w-sm" key={post._id}>
                  <CardBlog
                    id = {post._id}
                    title={post.title}
                    content={post.content}
                    img = {post.img}
                    createdAt = {post.createdAt}
                    // onDelete={() => handleDelete(post._id)}
                    // onEdit={() => handleEdit(post._id)}
                  />
                </li>
              ))}
            </ul>
      ) : (
        <p>No posts found</p>
      )}
      
        </section>
      )
    }