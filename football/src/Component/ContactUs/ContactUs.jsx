import React from 'react'
import "./ContactUs.css"
export default function ContactUs() {
  return (
    <>
          <div class="container0">
            <div class="content0">
                <div class="left-side">
                    <div class="address details">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="topic">Address</div>
                        <div class="class-one">islamabad</div>
                        <div class="text-two">E-9</div>
                    </div>
                    <div class="Phone details">
                        <i class="fas fa-phone-alt"></i>
                        <div class="topic">Phone</div>
                        <div class="class-one">+0000 0000000</div>
                        <div class="text-two">+0000 0000000</div>
                    </div>
                    <div class="Email details">
                        <i class="fas fa-envelope"></i>
                        <div class="topic">Email</div>
                        <div class="class-one">yahoo123@gmail.com</div>
                        <div class="text-two">hotmail123@gmail.com</div>
                    </div>
                </div>
                <div class="right-side">
                    <div class="topic-text">Send us a message</div>
                    <p>If you have any questions or querries please let us know from our given details.</p>
               
                <form action="#">
                    <div class="input-box">
                        <input type="text" placeholder="Enter your name"/>
                    </div>
                    <div class="input-box">
                        <input type="text" placeholder="Enter your email"/>
                    </div>
                    <div class="input-box message-box">
                        <textarea></textarea>
                    </div>
                    <div class="button">
                        <input type="button" value="Submit"/>
                    </div>
                </form>
              </div>
            </div>
        </div>
    </>
  )
}
