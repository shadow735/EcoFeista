import React, { useState, useEffect } from 'react';
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
    productName: '',
    quantity: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('cashOnDelivery');
  const totalAmount = new URLSearchParams(location.search).get('totalAmount') || 0;

  // State to hold cart items
  const [cartItems, setCartItems] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePaymentSuccess = async () => {
    try {
      // Delete the cart by making a request to the /delete-cart endpoint
      await axios.post('http://localhost:8000/cart/delete-cart');
      console.log('Cart deleted successfully');
  
      // Add any additional logic you need after deleting the cart
    } catch (error) {
      console.error('Error deleting the cart:', error);
      // Handle the error if needed
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (paymentMethod === 'cashOnDelivery') {
      const orderItems = cartItems.map((item) => ({
        productName: item.productName, // Add product name
        quantity: item.quantity, // Add quantity
        productPrice: item.productPrice, // You can use the productPrice from the cart item
      }));
  
      const formData = {
        name: customer.name,
        address: customer.address,
        city: customer.city,
        pincode: customer.pincode,
        contactNo: customer.contactNo,
        paymentMethod: 'Cash on Delivery',
        totalAmount: totalAmount,
        items: orderItems, // Add the order items from the cart
      };
  
      try {
        const response = await axios.post('http://localhost:8000/orders', formData); // Send order data to the server
        console.log('Response data:', response.data);
  
        // Pass data to the Invoice component and navigate to it
        navigate('/invoice', {
          state: {
            user: formData.name,
            items: orderItems, // Use the modified orderItems array
            totalPriceSecurity: totalAmount,
          },
        });
      } catch (error) {
        console.error('Error saving the order:', error);
      }
    } else if (paymentMethod === 'onlinePayment') {
      alert('Online Payment Not Available');
    } else {
      alert('Invalid payment method');
    }
  };
  useEffect(() => {
    // Fetch cart content when the BillingPage component mounts
    const fetchCartContent = async () => {
      try {
        const response = await axios.get('http://localhost:8000/cart/get-cart-content');
        const cartData = response.data.items;
        setCartItems(cartData);
      } catch (error) {
        console.error('Error fetching cart content:', error);
      }
    };

    fetchCartContent();
  }, []);

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
            value={`Rs ${totalAmount}`}
            readOnly
          />
        </div>
        <button onClick={handlePaymentSuccess} type="submit">Pay</button>

      </form>
     
    </div>
  );
}

export default BillingPage;