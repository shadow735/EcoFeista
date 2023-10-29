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
        const filteredData = data.filter(post => post.brand === 'Diwali');
        setBlogData(filteredData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="blog-container">
      <h2 className="blog-title">Diwali</h2>
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
        const filteredData = data.filter(post => post.brand === 'Dussehra');
        setBlogData(filteredData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="blog-container">
      <h2 className="blog-title">Dussehra</h2>
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
        const filteredData = data.filter(post => post.brand === 'Ganesh Chaturthi');
        setBlogData(filteredData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="blog-container">
      <h2 className="blog-title">Ganesh Chaturthi</h2>
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

function ChildComponent4() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('http://localhost:8000/blog/all') // Adjust the API endpoint as needed
      .then(response => response.json())
      .then(data => {
        // Filter the data to include only items with brand: 'festival1'
        const filteredData = data.filter(post => post.brand === 'Janmashtami');
        setBlogData(filteredData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="blog-container">
      <h2 className="blog-title">Janmashtami</h2>
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
function ChildComponent5() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('http://localhost:8000/blog/all') // Adjust the API endpoint as needed
      .then(response => response.json())
      .then(data => {
        // Filter the data to include only items with brand: 'festival1'
        const filteredData = data.filter(post => post.brand === 'Gudi Padwa');
        setBlogData(filteredData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="blog-container">
      <h2 className="blog-title">Gudi Padwa</h2>
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

function ChildComponent6() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('http://localhost:8000/blog/all') // Adjust the API endpoint as needed
      .then(response => response.json())
      .then(data => {
        // Filter the data to include only items with brand: 'festival1'
        const filteredData = data.filter(post => post.brand === 'Maha Shivratri');
        setBlogData(filteredData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="blog-container">
      <h2 className="blog-title">Maha Shivratri</h2>
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

function ChildComponent7() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('http://localhost:8000/blog/all') // Adjust the API endpoint as needed
      .then(response => response.json())
      .then(data => {
        // Filter the data to include only items with brand: 'festival1'
        const filteredData = data.filter(post => post.brand === 'Holi');
        setBlogData(filteredData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="blog-container">
      <h2 className="blog-title">Holi</h2>
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

// You can define more child components here

export { ChildComponent1, ChildComponent2, ChildComponent3, ChildComponent4, ChildComponent5, ChildComponent6,ChildComponent7 };
