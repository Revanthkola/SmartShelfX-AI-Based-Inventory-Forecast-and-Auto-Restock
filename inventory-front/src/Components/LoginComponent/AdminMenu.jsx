import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../Services/LoginService";
import "../../AdminStyles.css";
import dashboardImage from "../../assets/Dashboard.png";

const AdminMenu = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser().then(() => {
      localStorage.clear();
      sessionStorage.clear();
      navigate("/");
    });
  };

  return (

    <div className="admin-layout">

      {/* SIDEBAR */}
      <div className="sidebar">

        <h2 className="logo">SmartShelfX</h2>

        <div className="menu">

          <p className="menu-title">SKU</p>
          <button onClick={() => navigate("/sku-list")}>SKU List</button>
          <button onClick={() => navigate("/sku-entry")}>SKU Addition</button>

          <p className="menu-title">Product</p>
          <button onClick={() => navigate("/product-entry")}>Product Addition</button>
          <button onClick={() => navigate("/product-list")}>Product List</button>

          <p className="menu-title">Analysis</p>
          <button>All Products Analysis</button>
          <button>Single Product Demand</button>

          <p className="menu-title">Transactions</p>
          <button onClick={() => navigate("/add-transaction")}>Out Transaction</button>
          <button onClick={() => navigate("/transactions")}>In Transaction</button>

          <p className="menu-title">Users</p>
          <button>Show User Details</button>

        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>

      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">

        <div className="topbar">
          <h3>Admin Dashboard</h3>
        </div>

        <div className="dashboard-card">

          <div className="left">

            <h1>Welcome Admin 👋</h1>

            <p>
              SmartShelfX helps administrators manage inventory,
              track product demand and monitor transactions efficiently
              using an AI-powered smart inventory system.
            </p>

            <div className="quick-actions">
              <button onClick={() => navigate("/product-list")}>
                View Products
              </button>

              <button onClick={() => navigate("/sku-list")}>
                View SKU
              </button>
            </div>

          </div>

          <div className="right">
            <img src={dashboardImage} alt="Dashboard" />
          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminMenu;