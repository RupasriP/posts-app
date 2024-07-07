import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post, index }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to={`/edit/${index}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default PostItem;
