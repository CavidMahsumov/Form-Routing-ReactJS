import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = e => {
    console.log(username,email,password)
    const userData = {
      username,
      email,
      password
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    
    
    setUsername('');
    setEmail('');
    setPassword('');
    history.push("/login")
  };

  return (
    <div className="register-form-container">
    <h2>Create an Account</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="register-button">
        Sign Up
      </button>
      <div className="register-links">
        <span>Already have an account?</span>
        <a href="/">Log In</a>
      </div>
    </form>
  </div>
  );
};

export default RegisterForm;