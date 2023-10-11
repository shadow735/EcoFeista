import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../css/CartPage.css';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCartContent();
  }, []);

  const fetchCartContent = async () => {
    try {
      const response = await axios.get('http://localhost:8000/cart/get-cart-content');
      if (response.data && response.data.items) {
        setCartItems(response.data.items);
      }
    } catch (error) {
      console.error('Error fetching cart content:', error);
    }
  };

  const clearCart = async () => {
    try {
      const response = await axios.post('http://localhost:8000/cart/clear-cart');
      if (response.data && response.data.message === 'Cart cleared successfully') {
        setCartItems([]);
      }
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const placeOrder = () => {
    const totalAmount = cartItems.reduce(
      (total, item) => total + item.productPrice * item.quantity,
      0
    );

    navigate(`/billing?totalAmount=${totalAmount}`);
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.productPrice * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-box">
        <button className="clear-button" onClick={clearCart}>
          Clear Cart
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price (Rs)</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.productId}>
                <td>{item.productName}</td>
                <td>{item.quantity}</td>
                <td>{item.productPrice}</td>
              </tr>
            ))}
            <div className="action-buttons">
              <p className="total-amount">Total Amount: Rs {totalAmount.toFixed(2)}</p>
            </div>
          </tbody>
        </table>
        <button className="place-order-button" onClick={placeOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CartPage;
