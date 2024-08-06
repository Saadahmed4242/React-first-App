import React, {useState} from 'react'
import "./Login.css"

export default function Login() {
 
    return (
        <div className='login'>
            <form   className='container login-form'>
                <div className="mb-3">
                    <h1 className='container '>Login</h1>
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control"  id="email" name="email" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text text-below">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control"  name="password" id="password" required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
  )
}
