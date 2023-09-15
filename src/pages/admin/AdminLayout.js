import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../../components/Sidebar'; // Import the admin sidebar component
import SummaryPage from './SummaryPage'; // Import admin-specific pages
import ProductPage from './ProductPage';
import OrderPage from './OrderPage';
import UserPage from './UserPage';

function AdminLayout() {
  return (
    <div className="admin-layout">
      <Sidebar /> {/* Render the admin sidebar */}
      <main className="admin-content">
        <Switch>
          <Route path="/admin" exact component={SummaryPage} />
          <Route path="/admin/products" component={ProductPage} />
          <Route path="/admin/orders" component={OrderPage} />
          <Route path="/admin/users" component={UserPage} />
          {/* Add more routes for other admin-specific pages */}
        </Switch>
      </main>
    </div>
  );
}

export default AdminLayout;
