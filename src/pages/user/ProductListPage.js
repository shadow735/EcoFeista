import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Product from '../../components/user/Product';
import '../../css/ProductListPage.css';

function ProductListPage() {
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

  const uniqueCategories = [...new Set(createdProducts.map((prod) => prod.brand))];
  const [selectedbrand, setSelectedbrand] = useState(uniqueCategories[0]);

  const filteredProducts = createdProducts.filter((prod) => prod.brand === selectedbrand);

  return (
    <Container>
      <div className="row">
        <div className="col-md-3">
          <ul className="brand-links">
            {uniqueCategories.map((brand, index) => (
              <li
                key={index}
                className={brand === selectedbrand ? 'active' : ''}
                onClick={() => setSelectedbrand(brand)}
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-9">
          <div className="row">
            {filteredProducts.map((prod) => (
              <div className="col-md-12 col-lg-4 mb-4 mb-lg-0" key={prod.id}>
                <Product product={prod} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProductListPage;