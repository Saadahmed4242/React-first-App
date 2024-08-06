import { useState } from "react"
import "./SignUp.css"
import React from 'react'

export default function SignUp() {
  return (
<>
    <div class="sign-up-main">
   <div class="sign-up">
       <h1>Sign up</h1>
       <form class="form-div">
           <div class="label">
                   <label>First name</label>
                   <input type="text"  placeholder="">
                   </input>
               </div>
               <div class="label">
                   <label>Last name</label>
                   <input type="text" placeholder=""/>
         </div>
         <div class="label">
               <label>Email</label>
               <input type="email" placeholder=""/>
           </div>
           <div class="label">
               <label>password</label>
               <input type="password" placeholder=""/>
           </div>
           <div class="label">
               <label>Confirm password</label>
                   <input type="password" placeholder=""/>
       </div>
       <div class="btn" >
           <input type="button" id="submit" value="Submit"/>
       </div>
       </form>
   </div>
   </div>
   </>
  )
}
