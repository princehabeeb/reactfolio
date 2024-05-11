import React from 'react'
import HeroImg from '../assets/hero_img.png'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-description">
        <h1>Hi, I am John <br /> Frontend Engineer</h1>
        <p>
          As a Frontend Engineer, I craft responsive
           user interface with modern technologies.
           <br /> Bringing your designs to life.
           </p>
           <button className='btn'>Download My CV</button>
      </div>
      <div className="hero-image">
        <img src={HeroImg} alt='' />
      </div>
    </section>
  )
}

export default Hero