import React, { useState } from 'react';
import '../../css/userSignup.css'; // Import your CSS file
import axios from 'axios'; // Import Axios for making HTTP requests
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Fluid2Input = ({ type, label, style, id, focused, onFocus, onBlur, onChange, value }) => {
  let inputClass = 'fluid2-input';
  if (focused) {
    inputClass += ' fluid2-input--focus';
  } else if (value !== '') {
    inputClass += ' fluid2-input--open';
  }

  return (
    <div className={inputClass} style={style}>
      <div className="fluid2-input-holder">
        <input
          className="fluid2-input-input"
          type={type}
          id={id}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          autoComplete="off"
          value={value}
        />
        <label className="fluid2-input-label" htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
};

const Button = ({ buttonText, buttonClass, onClick }) => {
  return (
    <div className={`button ${buttonClass}`} onClick={onClick}>
      {buttonText}
    </div>
  );
};

const SignupContainer = () => {
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    contactNo: '',
    emailAddress: '',
    password: '',
  });

  const [focusedFields, setFocusedFields] = useState({
    isUsernameFocused: false,
    isFullNameFocused: false,
    isContactNoFocused: false,
    isEmailAddressFocused: false,
    isPasswordFocused: false,
  });

  const handleChange = (field, event) => {
    const { value } = event.target;
    setFormData({ ...formData, [field]: value });
  };

  const navigate = useNavigate(); // Create a navigate function for redirection

  const handleSubmit = () => {
    const { username, fullName, contactNo, emailAddress, password } = formData;

    // Make a POST request to your server's signup endpoint
    axios
      .post('http://localhost:8000/user/create', {
        username,
        fullName,
        contactNo,
        emailAddress,
        password,
      })
      .then((response) => {
        window.alert('Signup successful');

        // Redirect to the login page after successful signup
        navigate('/login');
      })
      .catch((error) => {
        window.alert('User Already exists: ' + error);
        // Handle signup errors here, e.g., display an error message to the user.
      });
  };

  const style = {
    margin: '15px 0',
  };

  return (
    <div className="signup-container">
      <div className="title">Sign Up</div>
      <Fluid2Input
        type="text"
        label="Username"
        id="username"
        style={style}
        focused={focusedFields.isUsernameFocused}
        onFocus={() => setFocusedFields({ ...focusedFields, isUsernameFocused: true })}
        onBlur={() => setFocusedFields({ ...focusedFields, isUsernameFocused: false })}
        onChange={(event) => handleChange('username', event)}
        value={formData.username}
      />
      <Fluid2Input
        type="text"
        label="Full Name"
        id="fullName"
        style={style}
        focused={focusedFields.isFullNameFocused}
        onFocus={() => setFocusedFields({ ...focusedFields, isFullNameFocused: true })}
        onBlur={() => setFocusedFields({ ...focusedFields, isFullNameFocused: false })}
        onChange={(event) => handleChange('fullName', event)}
        value={formData.fullName}
      />
      <Fluid2Input
        type="tel"
        label="Contact Number"
        id="contactNo"
        style={style}
        focused={focusedFields.isContactNoFocused}
        onFocus={() => setFocusedFields({ ...focusedFields, isContactNoFocused: true })}
        onBlur={() => setFocusedFields({ ...focusedFields, isContactNoFocused: false })}
        onChange={(event) => handleChange('contactNo', event)}
        value={formData.contactNo}
      />
      <Fluid2Input
        type="email"
        label="Email Address"
        id="emailAddress"
        style={style}
        focused={focusedFields.isEmailAddressFocused}
        onFocus={() => setFocusedFields({ ...focusedFields, isEmailAddressFocused: true })}
        onBlur={() => setFocusedFields({ ...focusedFields, isEmailAddressFocused: false })}
        onChange={(event) => handleChange('emailAddress', event)}
        value={formData.emailAddress}
      />
      <Fluid2Input
        type="password"
        label="Password"
        id="password"
        style={style}
        focused={focusedFields.isPasswordFocused}
        onFocus={() => setFocusedFields({ ...focusedFields, isPasswordFocused: true })}
        onBlur={() => setFocusedFields({ ...focusedFields, isPasswordFocused: false })}
        onChange={(event) => handleChange('password', event)}
        value={formData.password}
      />
      <Button buttonText="Sign Up" buttonClass="signup-button" onClick={handleSubmit} />
    </div>
  );
};

export default SignupContainer;
