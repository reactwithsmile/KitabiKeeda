import React from 'react';
import '../css/reg.css';

const Register = () => {
  return(
    <div className="register-wrapper">
      <h1>Register</h1>
      <hr />
      <form className='f-register'>
        <label className='f-username'>Username :<input type="text"  placeholder='write username here'/></label>

        <label className='f-phone'>phone no. :<input type="number" placeholder='write your phone no'/></label>

        <label className='f-email'>Email :<input type="email" placeholder='write email' /></label>

        <label className='f-password'>Password :<input type="password" placeholder='write your password'/></label>

        <label className='f-cpassword'>Confirm Password :<input type="password" placeholder='write again to confirm password' /></label>

        <input type="checkbox" /> Remember Me
        <div>
          <button className="reg-btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
export default Register;