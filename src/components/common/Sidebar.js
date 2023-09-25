import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
import '../../css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="StyledDashboard">
      <div className="SideNav">

        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin"
        >
          Summary
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/products"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/orders"
        >
          Orders
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/users"
        >
          Users
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/blog"
        >
          Blog
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/contacts"
        >
          Contact
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
