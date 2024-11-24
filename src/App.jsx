import React, { useState, useEffect } from 'react';
import errorImage from './assets/error-message.png';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts. Please try again later.');
        }
  
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      }
    };
  
    fetchPosts();
  }, []);

  return <div>

  </div>;
};

export default App;
