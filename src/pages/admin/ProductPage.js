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
      const response = await fetch('http://localhost:8000/products');
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
      });
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
        body: JSON.stringify({ price: newPrice }),
      });
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

  const renderImages = (imageData) => {
    return (
      <img
        src={imageData}
        alt="Product"
        style={{ maxWidth: '100px', maxHeight: '100px' }}
      />
    );
  };

  const chunkArray = (array, chunkSize) => {
    const chunked = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunked.push(array.slice(i, i + chunkSize));
    }
    return chunked;
  };

  // Group products by brand
  const productsByBrand = createdProducts.reduce((acc, product) => {
    if (!acc[product.brand]) {
      acc[product.brand] = [];
    }
    acc[product.brand].push(product);
    return acc;
  }, {});

  return (
    <div className="ProductContent">
      <Product onProductSubmit={handleProductSubmit} />
      <div className="CreatedProducts">
        {Object.entries(productsByBrand).map(([brand, products]) => (
          <div key={brand} className="BrandSection">
            <h2>{brand}</h2>
            <div className="ProductsRow">
              {chunkArray(products, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="ProductsRow">
                  {row.map((product) => (
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
                      {renderImages(product.image)}
                      <button onClick={() => deleteProduct(product._id)} className="DeleteButton">
                        Delete
                      </button>
                    </div>
                  ))}
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
