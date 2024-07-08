import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostItem from './PostItem';

const PostsDisplay = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  const deletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <div className='container'>
      <h1>Posts</h1>
      <div>
        {posts.map((post, index) => (
          <PostItem key={index} post={post} index={index} deletePost={deletePost} />
        ))}
      </div>
      <Link to="/create">
        <button>Create Post</button>
      </Link>
    </div>
  );
};

export default PostsDisplay;
