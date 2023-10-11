
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

import axios from 'axios';

const Product = ({ product }) => {
  const [createdProducts, setCreatedProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:8000/products'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setCreatedProducts(data);
      console.log('Fetched products:', data); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  console.log('createdProducts:', createdProducts);

  const handleBookClick = async () => {
    try {
      const cartResponse = await axios.post(`http://localhost:8000/cart/create-cart`);
      
      if (cartResponse.data && cartResponse.data.cartId) {
        console.log('Cart created with ID:', cartResponse.data.cartId);
  
        const addToCartData = {
          cartId: cartResponse.data.cartId,
          productId: product.id, // Replace with the actual product ID
          productName: product.name,
          productPrice: product.price,
          // Add other product details as needed
        };
  
        console.log('Adding product to cart:', addToCartData);
  
        const addToCartResponse = await axios.post(`http://localhost:8000/cart/add-to-cart`, addToCartData);
  
        if (addToCartResponse.data && addToCartResponse.data.message) {
          console.log('Product added to cart successfully:', addToCartResponse.data.message);
        } else {
          console.error('Failed to add product to cart');
        }
      } else {
        console.error('Failed to create a cart');
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  if (!product) {
    return (
      <Card className="product-card">
        <Card.Body>
          <div className="text-center text-danger">Product is not available</div>
        </Card.Body>
      </Card>
    );
  }


  const renderImages = (imageData) => {
    return (
// Inside your Product component
<img
  src={product.image}
  alt="Product"
  className="product-image"
  style={{
    maxWidth: '100%',
    maxHeight: '250px',
    objectFit: 'cover',
    marginBottom: '10px',
  }}
/>

    );
  };



  return (
    <Card className="product-card">
      <Card.Body>
        {/* Product name */}
        <h4 className="mb-0 fw-bold">{product.name}</h4>

        {/* Product description */}
        <div className="mb-3">
          <p className="text-muted">{product.desc}</p>
        </div>

        {/* Product image */}
        {renderImages(product.image)}

        {/* Product price */}
        <h5
  className="mb-0 product-price"
  style={{
    marginTop: '10px',
    color: '#007bff',
  }}
>
  Rs: {product.price}
</h5>

        {/* Book button */}
        <Button className="book-button" variant="primary" onClick={handleBookClick}>
          Book
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;