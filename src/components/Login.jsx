import React from 'react'
import { Link } from 'react-router-dom';
import "./assets/Login.css"

function Login() {
  return (
    <>
        <main className="login_screen">
          <div className="login_page_container ">
            <div className="login_page_header">
              
              <div className="login_page_title">
                <h1>Login</h1>
              </div>
            </div>
          <div className="login_page_form " style={{backgroundColor: (`#6495ed`)}}>            
            <div className="login_form_input_wrapper">
              <form>
                <div className="login_form_control_single">
                  <label htmlFor="mobile_number">Mobile Number</label>
                  <input type="tel"  placeholder="Enter your mobile number" autoComplete="off" />
                </div>
                <div className="login_form_control_single">
                  <label htmlFor="password">Password</label>
                  <input type="password" placeholder="Enter your password" autoComplete="off" />
                </div>
                <div className="login_form_control_single">
                  <button className="login-form-submit-btn" type="submit">LOGIN</button>
                </div>
                <div className="login_page_form_header">
                  <Link to="/forgot-password" className="forgot_password_link">Forgot Password?</Link>
                  <a href="javascript:void(0)" data-modal-target="help" className="need_help_link ">Need Help?</a>
              </div>
                <div className="login_page_register_link">                  
                  <Link to="/user" className='reg'>NEW REGISTER</Link>
                </div>
              </form>
            </div>
          </div>
          <div className="login_request_errors">
          </div>
        </div>
      </main>
    </>
  )
}

export default Login
