import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../css/BillingPage.css';
import axios from 'axios';

function BillingPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: '',
    address: '',
    city: '',
    pincode: '',
    contactNo: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('cashOnDelivery');

  const totalAmount = new URLSearchParams(location.search).get('totalAmount') || 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (paymentMethod === 'cashOnDelivery') {
      const formData = {
        name: customer.name,
        address: customer.address,
        city: customer.city,
        pincode: customer.pincode,
        contactNo: customer.contactNo,
        paymentMethod: 'Cash on Delivery',
        totalAmount: totalAmount,
      };

      try {
        const response = await axios.post('http://localhost:8000/api/orders', formData);
        console.log('Response data:', response.data);

        // Pass data to the Invoice component and navigate to it
        navigate('/invoice', {
          state: {
            user: formData.name,
            items: [
              {
                product: { product_name: 'Product A', product_price: totalAmount },
                quantity: 1,
              },
            ],
            totalPriceSecurity: totalAmount,
          },
        });
      } catch (error) {
        console.error('Error saving the order:', error);
      }
    } else if (paymentMethod === 'onlinePayment') {
      alert('Please Pay online');
    } else {
      alert('Invalid payment method');
    }
  };
  return (
    <div className="billing-form">
      <h2>Billing Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Customer Name:</label>
          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={customer.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={customer.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={customer.pincode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact No.:</label>
          <input
            type="text"
            name="contactNo"
            value={customer.contactNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Payment Method:</label>
          <select
            name="paymentMethod"
            value={paymentMethod}
            onChange={handlePaymentChange}
            required
          >
            <option value="cashOnDelivery">Cash on Delivery</option>
            <option value="onlinePayment">Online Payment</option>
          </select>
        </div>
        <div className="form-group">
          <label>Total Amount:</label>
          <input
            type="text"
            name="totalAmount"
            value={`Rs ${totalAmount}`} // Display the total amount
            readOnly
          />
        </div>
        <button type="submit">Pay</button>
      </form>
    </div>
  );
}

export default BillingPage;