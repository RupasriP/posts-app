import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostItem from './PostItem';

const PostsDisplay = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {posts.map((post, index) => (
          <PostItem key={index} post={post} index={index} />
        ))}
      </div>
      <Link to="/create">
        <button>Create Post</button>
      </Link>
    </div>
  );
};

export default PostsDisplay;
