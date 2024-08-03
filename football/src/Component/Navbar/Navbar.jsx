import React from 'react'
import logoimage from "../../assets/football.png"
import "./Navbar.css"
export default function Navbar() {
  return (
   <>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#"><img className='nav-logo-image' src={logoimage} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div className='nav-li'>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item mx-3">
            <a class="nav-link " aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item mx-3">
            <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item mx-3">
            <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item mx-3">
            <a class="nav-link" href="#">Contact Us</a>
            </li>
         
        
        </ul>
        </div>
      <form class="d-flex" role="search"> 
        <button class="btn btn-success mx-2" type="submit">SignUp</button>
        <button class="btn  btn-danger" type="submit">Login</button>
      </form>
    </div>
  </div>
</nav>
   </>
  )
}
