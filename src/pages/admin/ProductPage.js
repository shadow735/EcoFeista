import React, { useState, useEffect } from 'react';
import Product from '../../components/admin/Product';
import '../../css/ProductPage.css';

function ProductPage() {
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
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:8000/products/delete/${productId}`, {
        method: 'DELETE',
      }); // Replace with your API endpoint for deleting a product
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
      setCreatedProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleProductSubmit = (newProduct) => {
    setCreatedProducts([...createdProducts, newProduct]);
  };

  const handlePriceChange = async (productId, newPrice) => {
    try {
      const response = await fetch(`http://localhost:8000/products/update/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ price: newPrice }), // Send the new price in the request body
      }); // Replace with your API endpoint for updating a product's price
      if (!response.ok) {
        throw new Error('Failed to update product price');
      }
      setCreatedProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === productId ? { ...product, price: newPrice } : product
        )
      );
    } catch (error) {
      console.error('Error updating product price:', error);
    }
  };

  // Group products by brand
  const productsByBrand = createdProducts.reduce((acc, product) => {
    const brand = product.brand;
    if (!acc[brand]) {
      acc[brand] = [];
    }
    acc[brand].push(product);
    return acc;
  }, {});

  return (
    <div className="ProductContent">
      <Product onProductSubmit={handleProductSubmit} />
      <div className="CreatedProducts">
        {Object.keys(productsByBrand).map((brand) => (
          <div key={brand}>
            <h3>{brand}</h3>
            <div className="ProductRow">
              {productsByBrand[brand].map((product) => (
                <div key={product._id} className="ProductCard">
                  <h2>{product.name}</h2>
                  <p>
                    Price: ₹{' '}
                    <input
                      type="number"
                      value={product.price}
                      onChange={(e) =>
                        handlePriceChange(product._id, parseFloat(e.target.value))
                      }
                    />
                  </p>
                  <p>{product.desc}</p>
                  <img src={product.image} alt="Product" />
                  <button onClick={() => deleteProduct(product._id)} className="DeleteButton">
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
