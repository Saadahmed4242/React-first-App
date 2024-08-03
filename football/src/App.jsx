import { useState } from "react"
import Navbar from "./Component/Navbar/Navbar"
import About from "./Component/About/About"
import ContactUs from "./Component/ContactUs/ContactUs"
import Services from "./Component/Services/Services"

function App() {
  

  return (
    <>
      <Navbar/>
      <About/>
      <Services/>
      <ContactUs/>
    </>

  )
}

export default App
