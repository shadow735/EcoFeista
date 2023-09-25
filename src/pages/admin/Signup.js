import React, { useState } from "react";
import axios from "axios";
import "../../css/AdminSignup.css"; // You can create a CSS file for styling
import { Link } from "react-router-dom";
function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/admin/signup", {
        username,
        password,
      });

      if (response.status === 201) {
        setMessage("Signup successful!");
      } else {
        setMessage("Signup failed. Please try again.");
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
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
        <button type="submit">Signup</button>
        <Link to="/admin/login" className="signup-link">
          Login
        </Link>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Signup;
