import React, { useState } from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import MainPage from './MainPage';
import { useHistory } from 'react-router-dom';


const LoginForm = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = e => {
    const userData = JSON.parse(localStorage.getItem('userData'));


    if (userData && username === userData.username && password === userData.password) {
      console.log('Login successful');
      history.push("/main")
      
      // Perform the desired action after successful login
    } else {
      console.log('Invalid username or password');
      // Perform the desired action for an invalid login
    }

    // Reset form fields
    setUsername('');
    setPassword('');
  };

  return (
<div className="login-form-container">
      <h2>Login to Udemy</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your UserName"
            value={username}
            onChange={e => setUsername(e.target.value)}
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
        <button type="submit" className="login-button">
          Log In
        </button>
        <div className="login-links">
          <a href="/">Forgot Password?</a>
          <span>·</span>
          <a href="/">Create an Account</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;