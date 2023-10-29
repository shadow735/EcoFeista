// HomePage.js
import React from 'react';
import { Carousel, Card, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import your custom CSS file
import downloadImage from '../../images/homepage.png'; // Import the image
import p1 from '../../images/1 (1).jpg'; // Import the image
import p2 from '../../images/1 (7).jpg'; // Import the image
import p3 from '../../images/1 (8).jpg'; // Import the image
import p4 from '../../images/1 (11).jpg'; // Import the image
import p5 from '../../images/1 (15).jpg'; // Import the image
import p6 from '../../images/1 (23).jpg'; // Import the image
function HomePage() {

  const topSellingProducts = [
    { id: 1, name: 'Puspshala Agarbatti', price: 'Rs : 80', image: p1 },
    { id: 2, name: 'HandBag', price: 'Rs : 450', image: p2 },
    { id: 3, name: 'Lavander Agarbatti', price: 'Rs : 80', image: p3 },
    // Add more products as needed
  ];

  // Dummy data for new arrivals
  const newArrivalProducts = [
    { id: 7, name: 'Ganesh Idol', price: 'Rs : 150', image: p4 },
    { id: 8, name: 'Palm Leaf Plates', price: 'Rs : 80', image: p5 },
    { id: 9, name: 'Organic Gulal', price: 'Rs : 200', image: p6 },
    // Add more new arrival products as needed
  ];



  return (
    <div>
      <Carousel className="home-carousel">
        <Carousel.Item>
          <img
            src={downloadImage}
            alt="First slide"
            className="d-block w-100 max-height-image"
            style={{ maxHeight: '480px' }}
          />
        </Carousel.Item>

      </Carousel>

      <Container className="my-5">
        <h2 className="section-title">Top Selling Products</h2>
        <Row>
          {topSellingProducts.map((product) => (
            <Col key={product.id} lg={4} md={6} sm={12} className="mb-4">
              <Card className="product-card">
                <Card.Img variant="top" src={product.image}

                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                  <Link to="/products">
                    <Button variant="primary">View Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="my-5">
        <h2 className="section-title">New Arrivals</h2>
        <Row>
          {newArrivalProducts.map((product) => (
            <Col key={product.id} lg={4} md={6} sm={12} className="mb-4">
              <Card className="product-card">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                  <Link to="/products">
                    <Button variant="primary">View Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  );
}


export default HomePage;
