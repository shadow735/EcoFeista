import React, { useState } from 'react';
import axios from 'axios';
import '../../css/Product.css';

function Product({ onProductSubmit }) {
  const [brand, setBrand] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [imageData, setImageData] = useState(''); // State to store base64-encoded image data

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/products/create', {
        brand,
        name,
        price,
        desc,
        image: imageData, // Include the image data in the request
      });
      
      console.log('Product created', response.data);
      window.alert('Product created', response.data);
      // Reset the form fields
      setBrand('');
      setName('');
      setPrice('');
      setDesc('');
      setImageData('');
    } catch (error) {
      console.error('Error creating product', error);
      window.alert('Error creating product', error);
    }
  };

  // Function to handle image uploads and encode as base64
  const handleImageUpload = async (files) => {
    if (files && files.length > 0) {
      const file = files[0]; // Assuming you want to upload a single image

      const reader = new FileReader();

      reader.onload = async (e) => {
        const base64ImageData = e.target.result; // Base64-encoded image data
        setImageData(base64ImageData); // Set the image data in the component's state
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="StyledCreateProduct">
      <div className="FormContainer">
        <form className="StyledForm" onSubmit={handleSubmit}>
          <h3>Create a Product</h3>
          <select onChange={(e) => setBrand(e.target.value)} required>
            <option value="">Select Festival</option>
            <option value="Diwali"> Diwali</option>
            <option value="Dussehra">Dussehra</option>
            <option value="Ganesh Chaturthi"> Ganesh Chaturthi</option>
            <option value="Janmashtami"> Janmashtami</option>
            <option value="Gudi Padwa"> Gudi Padwa</option>
            <option value=" Maha Shivratri"> Maha Shivratri</option>
            <option value="Holi"> Holi</option>
          
            {/* Add more festival options as needed */}
          </select>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Short Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
          {/* Input field for image upload */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e.target.files)}
          />
          {/* Display the decoded image */}
          {imageData && <img src={imageData} alt="Product" />}
          <button className="PrimaryButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Product;
