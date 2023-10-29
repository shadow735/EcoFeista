import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrderPage.css';

function OrderPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders data from your backend API
    axios
      .get('http://localhost:8000/api/orders')
      .then((response) => {
        const ordersData = response.data;
        setOrders(ordersData);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
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
            <th>Product</th>

          </tr>
        </thead>
        <tbody>
          {orders.map((order, orderIndex) => (
            <tr key={orderIndex}>
              <td>{order.customer.name}</td>
              <td>{order.customer.address}</td>
              <td>{order.customer.city}</td>
              <td>{order.customer.pincode}</td>
              <td>{order.customer.contactNo}</td>
              <td>{order.paymentMethod}</td>
              <td>{order.totalAmount}</td>
              {order.items.map((item, itemIndex) => (
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
