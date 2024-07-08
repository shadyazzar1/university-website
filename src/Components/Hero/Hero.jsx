import React from 'react'
import './Hero.css'
import dark_arrow from'../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
           <h1>We Ensure better learning for a good world</h1>
           <p>this is not real university </p> 
           <button className='btn'>Learn More <img src={dark_arrow}/></button>
        </div>

    </div>
  )
}
export default Hero