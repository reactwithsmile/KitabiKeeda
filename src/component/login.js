import React from 'react';
import '../css/login.css';

const Login = () => {
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form className='f-login'>
        
        <label>Username<input type="text" /></label>
        <label>Password<input type="password" /></label>
        
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
export default Login;