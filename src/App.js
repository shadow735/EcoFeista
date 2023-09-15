import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserLayout from './pages/user/UserLayout';
import AdminLayout from './pages/admin/AdminLayout';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={AdminLayout} />
        <Route path="/" component={UserLayout} />
      </Switch>
    </Router>
  );
}

export default App;
