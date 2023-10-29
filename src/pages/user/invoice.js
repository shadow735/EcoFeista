import React, { useState, useEffect } from 'react';
import './invoice.css';
import { Document, Page, Text, View, pdf, StyleSheet } from '@react-pdf/renderer';
import axios from 'axios';

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: 'Helvetica',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  customerDetails: {
    marginBottom: 20,
  },
  orderSummary: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  table: {
    border: '1px solid #000',
    width: '100%',
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottom: '1px solid #000',
    backgroundColor: '#f0f0f0',
    padding: 5,
  },
  tableHeaderCell: {
    flex: 1,
    padding: 5,
  },
  tableRow: {
    flexDirection: 'row',
    padding: 5,
  },
  tableCell: {
    flex: 1,
    padding: 5,
    borderRight: '1px solid #000',
  },
  tableCellLast: {
    borderRight: 'none',
  },
  totalCost: {
    fontWeight: 'bold',
  },
});

const InvoiceDocument = ({ name,totalAmount, paymentMethod, items }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.header}>Invoice</Text>
        <View style={styles.customerDetails}>
          <Text>Customer Name: {name}</Text>
          <Text>Total Amount: {totalAmount}</Text>    
          <Text>Payment Method: { paymentMethod}</Text>         
        </View>
        <View>
          <Text style={styles.orderSummary}>Order Summary:</Text>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeaderCell, { flex: 2 }]}>Product</Text>
              <Text style={styles.tableHeaderCell}>Quantity</Text>
              <Text style={styles.tableHeaderCell}>Price</Text>
            </View>
            {items.map((item, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={[styles.tableCell, { flex: 2 }]}>{item.productName}</Text>
                <Text style={styles.tableCell}>{item.quantity}</Text>
                <Text style={[styles.tableCell, styles.tableCellLast]}>
                {item.productPrice}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View>
        
        </View>
      </View>
    </Page>
  </Document>
);
function Invoice() {
  const [customer, setCustomer] = useState({
    name: '',
    paymentMethod: '',
    totalAmount: '',
  });

  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    // Fetch customer information from the orders API
    axios
      .get('http://localhost:8000/api/orders')
      .then((response) => {
        const orders = response.data;
        if (orders.length > 0) {
          const latestOrder = orders[orders.length - 1]; // Select the last order
          setCustomer({
            name: latestOrder.customer.name,
            totalAmount: latestOrder.totalAmount,
            paymentMethod: latestOrder.paymentMethod,
          });
          setOrderItems(latestOrder.items); // Set the order items
        }
      })
      .catch((error) => {
        console.error('Error fetching order data:', error);
      });
  }, []);

  const handleDownload = async () => {
    try {
      const blob = await pdf(
        <InvoiceDocument 
        name={customer.name}
        paymentMethod={customer.paymentMethod}
        totalAmount={customer.totalAmount}
        items={orderItems} // Fix: Use orderItems here
      />
    ).toBlob();

      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = 'invoice.pdf';
      a.click();

      // Clean up the blob URL
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error generating or downloading the PDF:', error);
    }
  }

  return (
    <section className="invoice">
      <div className="custom-container">
        <div className="header">
        
          <div className="title">
            <h1 className="fw-bold text-primary">Thank you for your purchase!</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h2 className="customer-details">Customer Details</h2>
            <ul className="customer-list">
              <li className="customer-item">
                <b>Customer Name:</b> {customer.name}
              </li>
              <li className="customer-item">
                <b>Payment Method:</b> {customer.paymentMethod}
              </li>
              <li className="customer-item">
                <b>Total Amount:</b> {customer.totalAmount}
              </li>
            </ul>
          </div>

          <div className="col-md-6">
            <h2 className="order-summary">Order Summary</h2>
            <div className="table-responsive">
              <table className="order-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
      {orderItems.map((item, index) => (
        <tr key={index}>
          <td>{item.productName}</td>
          <td>{item.quantity}</td>
          <td>{item.productPrice}</td>
        </tr>
      ))}
    </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <ul className="cost-list">
              <li className="cost-item">
                <div className="total-cost">
                 
               
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="button-container">
      <button
        onClick={handleDownload}
        className="download-button"
        style={{ width: '145px', height: '40px' }} // Custom styles for the button
      >
        Download
      </button>
      </div>
    </section>
  );
}

export default Invoice;
