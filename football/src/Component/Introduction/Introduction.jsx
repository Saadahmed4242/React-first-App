import React from 'react'
import "./Introduction.css"
import video from "../../assets/intro.mp4"

import thumbnail from "../../assets/Thumbnail.png"
export default function Introduction() {
  return (
    <>
     <div className="container intro mt-5" >
      <div className="row" data-aos="fade-right">
        <h4>Beyond the Pitch: The Cultural Impact of Football</h4>
        <div className="col-md-6" data-aos="fade-right">
          <video
            width="100%"
            controls
            poster={thumbnail} // Replace with your video thumbnail
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center" data-aos="fade-up">
          <h1>Elegance on the Turf: The Art of Football</h1>
          <p>
          Football continues to evolve, with advancements in technology like VAR (Video Assistant Referee) shaping how the game is played and officiated. The sport’s global reach grows with each passing year, making football a dynamic and ever-changing landscape.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
