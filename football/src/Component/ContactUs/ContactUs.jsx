import React from 'react'
import "./ContactUs.css"
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
export default function ContactUs() {
  return (
    <>
          <div className="container-c">
        <div className='heading-contact'>
          
          <h1 className='heading-c'>Get In Touch </h1>
        </div>
        <div className="content-c">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one"><FaLocationDot/> PAF Complex E9</div>
              <div className="text-two">Islamabad</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one"> <IoIosCall></IoIosCall> +92 XXXXXXXXX</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">example@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send a message</div>
            <p>If you have any work for me or any types of queries related to my skills, you can send me a message from here. It's my pleasure to help you.</p>
            <form  >
              <div className="input-box">
                <input type="text" name="user_name" placeholder="Enter your name" required />
              </div>
              <div className="input-box">
                <input type="email" name="user_email" placeholder="Enter your email" required />
              </div>
              <div className="input-box message-box">
                <textarea name="message" placeholder="Enter your message" required></textarea>
              </div>
              <div className="contact-btn">
                <input className='contact-button' type="submit" value="Send" />
              </div>
            </form>
          
          </div>
        </div>
      </div>
    </>
  )
}
