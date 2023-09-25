import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  if (!product) {
    return (
      <Card className="product-card">
        <Card.Body>
          <div className="text-center text-danger">Product is not available</div>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="product-card">
      <Card.Body>
        <h4 className="mb-0 fw-bold">{product.name}</h4>
        <div className="mb-3">
          <p className="text-muted">{product.desc}</p>
        </div>
        <div className="d-flex justify-content-between mb-2 avail" data-avail={product.product_quantity}>

          <div className="ms-auto text-warning">
            <Link to="/cart">
              <Button className="book-button" variant="primary">
                Book
              </Button>
              
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <h5 className="mb-0">{product.product_name}</h5>
          <h5 className="text-dark mb-0">Rs: {product.price}</h5>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
