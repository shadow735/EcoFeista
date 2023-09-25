import React from 'react';
import { Container } from 'react-bootstrap';

function CartPage({ cart }) {
  return (
    <Container>
      <h2>Cart</h2>
      {cart && cart.length > 0 ? (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.name} - {product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </Container>
  );
}

export default CartPage;
