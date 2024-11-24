import React, { useState, useEffect } from 'react';
import errorImage from './assets/error-message.png';

const App = () => {
  const [posts, setPosts] = useState([]); // State variable to store the fetched blog posts
  const [error, setError] = useState(''); // State variable to store any potential error message

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // fetch data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts. Please try again later.');
        }
        
        // Parse the response JSON and update the state with the data
        const data = await response.json();
        setPosts(data); // Update the posts state with the fetched data
      } catch (err) {
        // If an error occurs, update the error state with the message
        setError(err.message);
      }
    };
  
    // Call the function to fetch posts when the component mounts
    fetchPosts();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <h1>Blog Posts</h1>
  
      {error ? (
        <div>
          <img src={errorImage} alt="Error occurred" />
          <p>{error}</p>
        </div>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  ;
};

export default App;