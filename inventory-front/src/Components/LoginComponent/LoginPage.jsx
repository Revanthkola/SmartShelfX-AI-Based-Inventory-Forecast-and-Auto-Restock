import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateUser } from "../../Services/LoginService";
import '../../DisplayView.css';

const LoginPage = () => {

   const navigate = useNavigate();

   const [loginData, setLoginData] = useState({
      username: "",
      password: ""
   });

   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);

   const handleChange = (e) => {
      setError("");
      setLoginData({
         ...loginData,
         [e.target.name]: e.target.value
      });
   };

   const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
         const res = await validateUser(loginData.username, loginData.password);
         const role = String(res.data);

         if (role === "Admin") navigate("/admin-menu");
         else if (role === "Manager") navigate("/manager-menu");
         else if (role === "Vendor") navigate("/vendor-menu");
         else setError("Invalid credentials");

      } catch {
         setError("Invalid credentials");
      }

      setLoading(false);
   };

   return (
      <div className="login-page">

         <div className="login-overlay"></div>

         <div className="login-container">

            <h1 className="app-title">SmartShelfX</h1>
            <p className="tagline">Inventory Forecast & Auto Restock</p>

            <form onSubmit={handleLogin}>

               <div className="input-group">
                  <input
                     type="text"
                     name="username"
                     placeholder="Email or Username"
                     value={loginData.username}
                     onChange={handleChange}
                     required
                  />
               </div>

               <div className="input-group">
                  <input
                     type="password"
                     name="password"
                     placeholder="Password"
                     value={loginData.password}
                     onChange={handleChange}
                     required
                  />
               </div>

               {error && <div className="error-box">{error}</div>}

               <button className="login-btn">
                  {loading ? "Logging in..." : "Login"}
               </button>

            </form>

            <div className="register-section">
               Don't have an account?
               <span onClick={() => navigate('/register')}> Register</span>
            </div>

         </div>
      </div>
   );
};

export default LoginPage;