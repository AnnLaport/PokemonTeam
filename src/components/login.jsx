import React from 'react';
import {Link} from 'react-router-dom';
import  '../styles.css';

function login() {

  const login=(e)=>{
    e.preventDefault();
    console.log('here the login is going to be made');
  }

  return (
    <div className="login">
        <div className='login-card'>
          <h2>Login</h2>
          <h3>Enter your credentials</h3>
          <form className="login-form">
          <input className="form-control m-1" type="text" placeholder="username" />
          <br/>
          <input className="form-control m-1" type="password" placeholder="password" />
          <br/>
          <Link className="linkregister" to='/register'>Click here if you dont have an account</Link>
          <br />
          <br />
          <button className='btn btn-light' onClick={(e)=>login(e)}>Login</button>
          </form>
        </div>
    </div>
  );
}

export default login;