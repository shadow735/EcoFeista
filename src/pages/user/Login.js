import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../../css/userLogin.css';


// Define Fluid1Input as a functional component
const Fluid1Input = ({ type, label, style, id, focused, onFocus, onBlur, onChange, value }) => {
  let inputClass = 'fluid1-input';
  if (focused) {
    inputClass += ' fluid1-input--focus';
  } else if (value !== '') {
    inputClass += ' fluid1-input--open';
  }

  return (
    <div className={inputClass} style={style}>
      <div className="fluid1-input-holder">
        <input
          className="fluid1-input-input"
          type={type}
          id={id}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          autoComplete="off"
          value={value}
        />
        <label className="fluid1-input-label" htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
};

// Define Button as a functional component
const Button = ({ buttonText, buttonClass, onClick }) => {
  return (
    <div className={`button ${buttonClass}`} onClick={onClick}>
      {buttonText}
    </div>
  );
};

function Login() {
  const history = useNavigate();
  // Use the useUser hook to access the user context
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  function focusField(field) {
    switch (field) {
      case 'Username':
        setIsUsernameFocused(true);
        setIsPasswordFocused(false);
        break;
      case 'Password':
        setIsUsernameFocused(false);
        setIsPasswordFocused(true);
        break;
      default:
        break;
    }
  }

  function blurField(field) {
    switch (field) {
      case 'Username':
        setIsUsernameFocused(false);
        break;
      case 'Password':
        setIsPasswordFocused(false);
        break;
      default:
        break;
    }
  }

  function handleChange(field, event) {
    const { value } = event.target;
    switch (field) {
      case 'Username':
        setUsername(value);
        break;
      case 'Password':
        setPassword(value);
        break;
      default:
        break;
    }
  }

  async function handleSubmit() {
    const data = {
      username,
      password,
    };

    try {
      const response = await axios.post("http://localhost:8000/user/login", data);

      if (response.status === 200) {
        // Login successful
        // Replace with actual user data
        // Update the user context with the user's name
        window.alert('Login successful');
        history("/"); // Redirect to the dashboard or another authenticated route
      } else if (response.status === 401) {
        // Authentication failed - user not found or wrong password
        window.alert('Wrong username or password. Please try again.');
      }
    } catch (error) {
      // Handle login errors here, e.g., display an error message to the user.
      console.error('Login error:', error);
      window.alert('Login failed. Please try again.');
    }
  }

  const style = {
    margin: '15px 0',
  };

  return (
    <div className="signin-container">
      <div className="title">Login</div>
      <form action="POST">
        <Fluid1Input
          type="text"
          label="Username"
          id="username"
          style={style}
          focused={isUsernameFocused}
          onFocus={() => focusField('Username')}
          onBlur={() => blurField('Username')}
          onChange={(event) => handleChange('Username', event)}
          value={username}
        />
        <Fluid1Input
          type="password"
          label="Password"
          id="password"
          style={style}
          focused={isPasswordFocused}
          onFocus={() => focusField('Password')}
          onBlur={() => blurField('Password')}
          onChange={(event) => handleChange('Password', event)}
          value={password}
        />
        <Button buttonText="Login" buttonClass="signin-button" onClick={() => handleSubmit()} />
      </form>

      <Link to="/signup" className="signup-link">
        Signup Page
      </Link>
    </div>
  );
}

export default Login;
