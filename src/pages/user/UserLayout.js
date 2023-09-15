import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header'; // Import the header component
import Navbar from '../../components/Navbar'; // Import the navbar component
import HomePage from './HomePage'; // Import user-specific pages
import ProductListPage from './ProductListPage';
import ContactPage from './ContactPage';
import BlogPage from './BlogPage';

function UserLayout() {
  return (
    <div className="user-layout">
      <Header /> {/* Render the header */}
      <Navbar /> {/* Render the navbar */}
      <main className="user-content">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/products" component={ProductListPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/blog" component={BlogPage} />
          {/* Add more routes for other user-specific pages */}
        </Switch>
      </main>
    </div>
  );
}

export default UserLayout;
