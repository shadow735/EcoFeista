
import React, { useState } from 'react';
import axios from 'axios';
import '../../css/Product.css';

function Product({ onProductSubmit }) {
  const [brand, setBrand] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/products/create', {
        brand,
        name,
        price,
        desc,
      });
      
      console.log('Product created', response.data);
      window.alert('Product created', response.data);
      // Reset the form fields
      setBrand('');
      setName('');
      setPrice('');
      setDesc('');
    } catch (error) {
      console.error('Error creating product', error);
      window.alert('Error creating product', error);
    }
  };

  return (
    <div className="StyledCreateProduct">
      <div className="FormContainer">
        <form className="StyledForm" onSubmit={handleSubmit}>
          <h3>Create a Product</h3>
          <select onChange={(e) => setBrand(e.target.value)} required>
            <option value="">Select Festival</option>
            <option value="festival1">Festival 1</option>
            <option value="festival2">Festival 2</option>
            <option value="festival3">Festival 3</option>
            <option value="festival4">Festival 4</option>
            <option value="festival5">Festival 5</option>
            <option value="festival6">Festival 6</option>
            <option value="festival7">Festival 7</option>
            <option value="festival8">Festival 8</option>
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
          <button className="PrimaryButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Product;
