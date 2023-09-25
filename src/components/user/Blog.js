import React, { useState, useEffect } from 'react';
import '../../css/Blog.css'

function ChildComponent1() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('http://localhost:8000/blog/all') // Adjust the API endpoint as needed
      .then(response => response.json())
      .then(data => {
        // Filter the data to include only items with brand: 'festival1'
        const filteredData = data.filter(post => post.brand === 'festival1');
        setBlogData(filteredData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="blog-container">
      <h2 className="blog-title">Festival Component 1</h2>
      <ul className="blog-list">
        {blogData.map(post => (
          <li key={post._id} className="blog-post">
            <h2 className="blog-post-title">{post.title}</h2>
            <p className="blog-post-content">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChildComponent1;

function ChildComponent2() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('http://localhost:8000/blog/all') // Adjust the API endpoint as needed
      .then(response => response.json())
      .then(data => {
        // Filter the data to include only items with brand: 'festival1'
        const filteredData = data.filter(post => post.brand === 'festival2');
        setBlogData(filteredData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="blog-container">
      <h2 className="blog-title">Festival Component 2</h2>
      <ul className="blog-list">
        {blogData.map(post => (
          <li key={post._id} className="blog-post">
            <h2 className="blog-post-title">{post.title}</h2>
            <p className="blog-post-content">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ChildComponent3() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('http://localhost:8000/blog/all') // Adjust the API endpoint as needed
      .then(response => response.json())
      .then(data => {
        // Filter the data to include only items with brand: 'festival1'
        const filteredData = data.filter(post => post.brand === 'festival3');
        setBlogData(filteredData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Festival Component 3</h2>
      <ul>
        {blogData.map(post => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ChildComponent4() {
  return (
    <div>
      <h2>Festival Component 4</h2>
      {/* Content for ChildComponent1 */}
    </div>
  );
}

function ChildComponent5() {
  return (
    <div>
      <h2>Festival Component 5</h2>
      {/* Content for ChildComponent1 */}
    </div>
  );
}

function ChildComponent6() {
  return (
    <div>
      <h2>Festival Component 6</h2>
      {/* Content for ChildComponent1 */}
    </div>
  );
}

// You can define more child components here

export { ChildComponent1, ChildComponent2, ChildComponent3, ChildComponent4, ChildComponent5, ChildComponent6 };
