import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../../components/common/Sidebar';
import SummaryPage from './SummaryPage';
import ProductPage from './ProductPage';
import OrderPage from './OrderPage';
import UserPage from './UserPage';
import ContactPage from './ContactPage';
import App from './App'
import BlogPage from './Blog';
function AdminLayout() {
  return (
    <div className="admin-layout">
      <div className="admin-container">
        <Sidebar />
        <main className="admin-content">
          <Routes>
            <Route index element={<SummaryPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/users" element={<UserPage />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/app" element={<App />} />
            <Route path="/blog" element={<BlogPage />} />

          </Routes>
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
