import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from './Pages/LoginForm';
import { Link } from 'react-router-dom'
import RegisterForm from './Pages/RegisterForm';
import MainPage from './Pages/MainPage';


function App() {
  return (
    <Router>
      <div>
   
        <Switch>
          <Route path="/login">
            <LoginForm></LoginForm>
          </Route>
          <Route path="/register">
            <RegisterForm></RegisterForm>
          </Route>
          <Route path='/Main'>
            <MainPage></MainPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
