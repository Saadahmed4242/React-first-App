import React from 'react'
import "./Services.css"
import service1 from "../../assets/ethics21.jpg"
import service2 from "../../assets/sales2.jpg"
import service3 from "../../assets/about.jpg"
export default function Services() {
  return (
    <>
    <div className='service-page'>
        <div className="heading-services">
            <h3>Our Services</h3>
        </div>
        <div className='services'>
            <div className="card ser" >
            <img src={service1} className="card-img-top ser-img" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Service-1</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
            <div className="card ser" >
            <img src={service2} className="card-img-top ser-img" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Service-2</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
            <div className="card ser" >
            <img src={service2} className="card-img-top ser-img" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Service-3</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}


