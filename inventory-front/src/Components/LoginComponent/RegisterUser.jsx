import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerNewUser } from "../../Services/LoginService";
import '../../DisplayView.css';

const RegisterUser = () => {

   const navigate = useNavigate();

   const [inventoryUser, setInventoryUser] = useState({
      username: "",
      password: "",
      personalName: "",
      email: "",
      role: "",
   });

   const [confirmPassword, setConfirmPassword] = useState("");
   const [errors, setErrors] = useState({});
   const [flag, setFlag] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   useEffect(() => {
      setFlag(false);
   }, []);

   const onChangeHandler = (e) => {
      setFlag(false);
      const { name, value } = e.target;
      setInventoryUser(prev => ({ ...prev, [name]: value }));
   };

   const handleValidation = (e) => {
      e.preventDefault();

      let tempErrors = {};
      let isValid = true;

      if (!inventoryUser.username.trim()) {
         tempErrors.username = "Username is required";
         isValid = false;
      }

      if (!inventoryUser.personalName.trim()) {
         tempErrors.personalName = "Full name is required";
         isValid = false;
      }

      if (!inventoryUser.email.trim()) {
         tempErrors.email = "Email is required";
         isValid = false;
      } else if (!emailPattern.test(inventoryUser.email)) {
         tempErrors.email = "Invalid email format";
         isValid = false;
      }

      if (!inventoryUser.password.trim()) {
         tempErrors.password = "Password is required";
         isValid = false;
      } else if (inventoryUser.password.length < 5) {
         tempErrors.password = "Minimum 5 characters";
         isValid = false;
      }

      if (!confirmPassword) {
         tempErrors.confirmPassword = "Confirm password required";
         isValid = false;
      } else if (inventoryUser.password !== confirmPassword) {
         tempErrors.confirmPassword = "Passwords do not match";
         isValid = false;
      }

      if (!inventoryUser.role) {
         tempErrors.role = "Select a role";
         isValid = false;
      }

      setErrors(tempErrors);

      if (isValid) createUser(e);
   };

   const createUser = async (e) => {
      e.preventDefault();
      setIsLoading(true);

      try {
         await registerNewUser(inventoryUser);
         setFlag(true);
      } catch {
         setFlag(false);
      }

      setIsLoading(false);
   };

   const returnBack = () => navigate('/');

   return (
      <div className="login-page">

         <div className="login-overlay"></div>

         <div className="login-container">

            <h1 className="app-title">Create Account</h1>
            <p className="tagline">Start managing inventory smarter</p>

            {flag ? (
               <div className="success-box">
                  <div className="success-icon">✓</div>
                  <p>Account created successfully</p>

                  <button className="login-btn" onClick={returnBack}>
                     Go to Login
                  </button>
               </div>
            ) : (

               <form onSubmit={handleValidation}>

                  {/* USERNAME */}
                  <div className="input-group">
                     <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={inventoryUser.username}
                        onChange={onChangeHandler}
                     />
                     {errors.username && <span className="error">{errors.username}</span>}
                  </div>

                  {/* FULL NAME */}
                  <div className="input-group">
                     <input
                        type="text"
                        name="personalName"
                        placeholder="Full Name"
                        value={inventoryUser.personalName}
                        onChange={onChangeHandler}
                     />
                     {errors.personalName && <span className="error">{errors.personalName}</span>}
                  </div>

                  {/* EMAIL */}
                  <div className="input-group">
                     <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={inventoryUser.email}
                        onChange={onChangeHandler}
                     />
                     {errors.email && <span className="error">{errors.email}</span>}
                  </div>

                  {/* PASSWORD */}
                  <div className="input-group">
                     <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={inventoryUser.password}
                        onChange={onChangeHandler}
                     />
                     {errors.password && <span className="error">{errors.password}</span>}
                  </div>

                  {/* CONFIRM PASSWORD */}
                  <div className="input-group">
                     <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                     />
                     {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                  </div>

                  {/* ROLE (FIXED UI) */}
                  <div className="input-group">
                     <div className="select-wrapper">
                        <select
                           name="role"
                           value={inventoryUser.role}
                           onChange={onChangeHandler}
                        >
                           <option value="" disabled>Select Role</option>
                           <option value="Admin">Admin</option>
                           <option value="Manager">Manager</option>
                           <option value="Vendor">Vendor</option>
                        </select>
                     </div>
                     {errors.role && <span className="error">{errors.role}</span>}
                  </div>

                  <button className="login-btn">
                     {isLoading ? "Registering..." : "Register"}
                  </button>

               </form>
            )}

            {!flag && (
               <div className="register-section">
                  Already have an account?
                  <span onClick={returnBack}> Login</span>
               </div>
            )}

         </div>
      </div>
   );
};

export default RegisterUser;