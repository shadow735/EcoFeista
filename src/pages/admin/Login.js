import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/AdminLogin.css"; // Import the CSS file for styling
import axios from "axios"; // Import Axios for making API requests

function Login() {
  const navigate = useNavigate(); // Get the navigation function from react-router-dom

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting

    try {
      const response = await axios.post("http://localhost:8000/admin/login", {
        username,
        password,
      });

      if (response.status === 200) {
        // Redirect to /admin after successful login
        window.alert('Successful Login')
        navigate("/admin/orders");
      } else {
        setError("Login failed. Please check your credentials.");
        window.alert('Login Failed')
      }
    } catch (error) {
      setError("An error occurred during login.");
      window.alert("An error occurred during login.");
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Login;
