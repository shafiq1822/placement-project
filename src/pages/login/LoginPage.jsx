import React from 'react'
import './loginpage.css'
import {Link} from 'react-router-dom'
import LoginNavbar from '../../components/loginNavbar/LoginNavbar'

const LoginPage = () => {
  return (
    <main>
    <LoginNavbar/>
    <div className="login-page-container">
    <div className="login-container">
        <h5 className='title'>Login</h5>
        <form action="#">
          <div className="login-user-details">
            <div className="login-input-box">
              <span className="login-details">User name</span>
              <input type="text" placeholder='Enter your User name' required/>
            </div>
            <div className="login-input-box">
              <span className="login-details">Password</span>
              <input type="password" placeholder='Enter your password' required/>
            </div>
          </div>
          <p className='no-account'> Don't  have an account. <Link to='/registrationPage'><span className="register-link">Register here.</span></Link> </p>
           <input type="submit" className='submit-btn'/>
        </form>
      </div>  
    </div>  
    </main>
  )
}

export default LoginPage
