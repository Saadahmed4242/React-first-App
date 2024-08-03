import React from 'react'
import c1 from "../../assets/social1.png"
import  c2 from "../../assets/images.jpg"
import "./About.css"
export default function About() {
  return (
    <>
      <div id="carouselExampleFade" class="carousel slide carousel-fade c-div">
        <div class="carousel-inner c-div">
            <div class="carousel-item active">
            <img src={c1} class="d-block w-100 c-div" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={c2} class="d-block w-100 c-div" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={c1} class="d-block w-100 c-div" alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </>
  )
}
