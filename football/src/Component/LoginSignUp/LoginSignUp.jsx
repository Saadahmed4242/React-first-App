import React, { useState } from 'react';
import './LoginSignUp.css';
import user from '../../assets/user.jpg';
import password from '../../assets/password.jpg'; 
import email from '../../assets/email.jpg';

const LoginSignUp = () => {
    const [action, setAction] = useState("Sign Up");

    const handleSignUpClick = () => setAction("Sign Up");
    const handleLoginClick = () => setAction("Login");

    return (
        <div className='loginSignUp-container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user} alt="User Icon" />
                    <input type="text" placeholder="Name" />
                </div>
                <div className="input">
                    <img src={email} alt="Email Icon" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <img src={password} alt="Password Icon" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            <div className="forgot-password">Forgot password <span>click here!</span></div>
            <div className="submit-container">
                <div 
                    className={action === "Sign Up" ? "submit gray" : "submit"} 
                    onClick={handleSignUpClick}
                >
                    Sign Up
                </div>
                <div 
                    className={action === "Login" ? "submit gray" : "submit"} 
                    onClick={handleLoginClick}
                >
                    Login
                </div>
            </div>
        </div>
    );
}

export default LoginSignUp;
