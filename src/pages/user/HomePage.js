import React from 'react';
import { Carousel } from 'react-bootstrap'; // Import Carousel component
import { Link } from 'react-router-dom'; // Import Link component from your router library
import downloadImage from './aa.jpg'; // Import the image

function HomePage() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            src={downloadImage}
            alt="First slide"
            className="d-block w-100 max-height-image"
            style={{ maxHeight: '600px' }}
          />
          <Carousel.Caption className="text-center">
            <h3 style={attractiveText}>EcoFiestaFinds</h3>
            <Link to="#" className="btn btn-primary btn-lg rounded-pill my-3 animated-btn">
              Buy Product
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items as needed */}
      </Carousel>
    </div>
  );
}

// Define a style object for attractive text
const attractiveText = {
  color: 'white', // Change the text color to blue
  fontSize: '5rem',  // Font size
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Text shadow
  // Add any other styles you prefer
};

export default HomePage;
