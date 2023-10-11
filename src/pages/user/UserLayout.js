// UserLayout.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HomePage from './HomePage';
import ProductListPage from './ProductListPage';
import ContactPage from './ContactPage';
import BlogPage from './BlogPage';
import AboutPage from './AboutPage';
import Login from './Login';
import SignupContainer from './SignUp';
import CartPage from './Cart';
import BillingPage from './BillingPage'; 
import Invoice from './invoice';
function UserLayout() {
  return (

    <div className="user-layout">
      <Header />

      <main className="user-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupContainer />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/billing" element={<BillingPage/>} />
          <Route path="/invoice" element={<Invoice/>} />
        </Routes>
      </main>
      <Footer />
    </div>

  );
}

export default UserLayout;
