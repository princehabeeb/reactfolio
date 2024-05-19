import React from 'react';
import IMG1 from '../assets/Rectangle 30.png';
import '../styles/Works.css'

const Works = () => {
  return (
    <div className='works'>
      <h2>Featured works</h2>
      {/* single project */}
      <div className='project'>
        <div className="image">
          <img src={IMG1} alt="dashboard image" />
        </div>
        <div className="description">
          <h1>Ecommerce Dashboard</h1>
          <span>2020</span> complete
          <p>
            Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Iure voluptatem 
            corporis corrupti, aut fuga distinctio?
            </p>
        </div>
      </div>
      <div className='project'>
        <div className="image">
          <img src={IMG1} alt="dashboard image" />
        </div>
        <div className="description">
          <h1>Ecommerce Dashboard</h1>
          <span>2020</span> complete
          <p>
            Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Iure voluptatem 
            corporis corrupti, aut fuga distinctio?
            </p>
        </div>
      </div>
      <div className='project'>
        <div className="image">
          <img src={IMG1} alt="dashboard image" />
        </div>
        <div className="description">
          <h1>Ecommerce Dashboard</h1>
          <span>2020</span> complete
          <p>
            Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Iure voluptatem 
            corporis corrupti, aut fuga distinctio?
            </p>
        </div>
      </div>
    </div>
  )
}

export default Works