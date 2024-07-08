import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post, index, deletePost }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to={`/edit/${index}`}>
        <button>Edit</button>
      </Link>
      <button onClick={() => deletePost(index)}>Delete</button>
    </div>
  );
};

export default PostItem;
