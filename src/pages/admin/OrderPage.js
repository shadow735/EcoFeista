import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrderPage.css';

function OrderPage() {
  const [orders, setOrders] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch orders data from your backend API
    axios
      .get('http://localhost:8000/api/orders') // Replace with your orders API endpoint
      .then((response) => {
        const ordersData = response.data;
        setOrders(ordersData);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
      });

    // Fetch cart items data from your backend API
    axios
      .get('http://localhost:8000/api/carts') // Replace with your cart items API endpoint
      .then((response) => {
        const itemsData = response.data;
        setCartItems(itemsData);
      })
      .catch((error) => {
        console.error('Error fetching cart items:', error);
      });
  }, []);

  return (
    <div className="order-page">
      <h1>OrderPage</h1>
      <table className="order-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Pincode</th>
            <th>Contact No</th>
            <th>Payment Method</th>
            <th>Total Amount</th>
            <th>Product Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, orderIndex) => (
            <tr key={orderIndex}>
              <td>{order.name}</td>
              <td>{order.address}</td>
              <td>{order.city}</td>
              <td>{order.pincode}</td>
              <td>{order.contactNo}</td>
              <td>{order.paymentMethod}</td>
              <td>{order.totalAmount}</td>
              {cartItems
                .filter((item) => item.orderId === order.id)
                .map((item, itemIndex) => (
                  <tr key={itemIndex}>
                    <td colSpan="6"></td>
                    <td>{item.productName}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderPage;