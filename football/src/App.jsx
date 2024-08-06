import { useState } from "react"
import Navbar from "./Component/Navbar/Navbar"
import About from "./Component/About/About"
import ContactUs from "./Component/ContactUs/ContactUs"
import Services from "./Component/Services/Services"
import Login from "./Component/Login/Login"
import SignUp from "./Component/SignUp/SignUp"
import AboutUs from "./Component/AboutUs/AboutUs"
import Introduction from "./Component/Introduction/Introduction"
import NewsAlert from "./Component/NewsAlert/NewsAlert"
import LoginSignUp from "./Component/LoginSignUp/LoginSignUp"

function App() {
  

  return (
    <>
      <Navbar/>
      <About/>
      <NewsAlert/>
      <Introduction/>
      <AboutUs/>
      <Services/>
      <ContactUs/>
      <Login/>
      <SignUp/>
      <LoginSignUp/>
      
    </>

  )
}

export default App
