import React from 'react'
import f from "../../assets/ab.jpg" 
import "./AboutUs.css"
export default function AboutUs() {
  return (
    <>
            <div class="container-c">
                <div class="heading-c">
                 <h1 class="c-heading">AboutUs</h1>
                </div>
                <section class="AboutUs-c">
                    <div class="AboutUs-images">
                        <img  className='AboutUs-images AboutUs-image' src={f} alt=""/>
                    </div>

                    <div class="AboutUs-content">
                        <h2 className='aboutUs-heading'>Football</h2>
                        <p>Football is a very popular sport that is played at high schools, colleges, and professional stadiums. It involves running, passing, kicking, and body contact. A football game is played between two teams of 11 players each. </p>
                        <button className='aboutUs-button'>Learn More</button>

                    </div>
                </section>
            </div>
         </>
  )
}
