import React, { useState, useEffect } from 'react';

import '../../css/AdminBlog.css';

function BlogPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [brand, setBrand] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts when the component mounts
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch('http://localhost:8000/blog/all');
      if (response.ok) {
        const data = await response.json();
        setBlogPosts(data);
      } else {
        console.error('Failed to fetch blog posts');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !brand) {
      setErrorMessage('Title, content, and brand are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/blog/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, brand }),
      });

      if (response.ok) {
        window.alert('Blog post added successfully.');
        setTitle('');
        setContent('');
        setBrand('');
        setErrorMessage('');
        fetchBlogPosts();
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Failed to add blog post.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while adding the blog post.');
    }
  };

  const handleDelete = async (postId) => {
    try {
      const response = await fetch(`http://localhost:8000/blog/${postId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        window.alert('Blog post deleted successfully.');
        fetchBlogPosts();
      } else {
        const errorData = await response.json();
        window.alert(errorData.error || 'Failed to delete blog post.');
      }
    } catch (error) {
      console.error('Error:', error);
      window.alert('An error occurred while deleting the blog post.');
    }
  };

  return (
    <div>
      <div className="admin-panel">
        <h2>Add Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="brand">Select Festival:</label>
            <select
              id="brand"
              onChange={(e) => setBrand(e.target.value)}
              required
              value={brand}
            >
              <option value="">Select Festival</option>
              <option value="Diwali">Diwali</option>
              <option value="Dussehra">Dussehra</option>
              <option value="Ganesh Chaturthi">Ganesh Chaturthi</option>
              <option value="Janmashtami">Janmashtami</option>
              <option value="Gudi Padwa">Gudi Padwa</option>
              <option value="Maha Shivratri">Maha Shivratri</option>
              <option value="Holi">Holi</option>
              {/* Add more festival options here */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              style={{ height: '800px', width: '90%' }}
            />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <button type="submit" className="add-button">
            Add Blog Post
          </button>
        </form>
      </div>

      <section className="blog-content">
  <h2>Blog Content</h2>
  <ul>
    {blogPosts.map((post) => (
      <li key={post._id} className="blog-post">
        
        <h3 className="post-title">{post.title}</h3>
        <h6 className="post-brand">Festival: {post.brand}</h6>
        <div className="post-content">{post.content}</div>
        
        <button onClick={() => handleDelete(post._id)} className="delete-button">
          Delete
        </button>
      </li>
    ))}
  </ul>
</section>

    </div>
  );
}

export default BlogPage;
