import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CreatePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    if (id && posts[id]) {
      const post = posts[id];
      setTitle(post.title);
      setContent(post.content);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    if (id) {
      posts[id] = newPost;
    } else {
      posts.push(newPost);
    }

    localStorage.setItem('posts', JSON.stringify(posts));
    navigate('/');
  };

  return (
    <div className='container'>
      <h1>{id ? 'Edit Post' : 'Create Post'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
        </div>
        <button type="submit">{id ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default CreatePost;
