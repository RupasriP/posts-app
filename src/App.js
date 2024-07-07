import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsDisplay from './Components/PostsDisplay';
import CreatePost from './Components/CreatePost';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsDisplay />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit/:id" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
