import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Blog.css'

const Blog = () => {
  return (
    <section className='blog'>
      <div className='label'>
        <h6>Recent Posts</h6>
        <p><Link to="">View all</Link></p>
      </div>
      <div className='blogs'>
        <div className="blog1">
          <h1>How to build a landing page</h1>
          <h4> 12: 40 | Morning</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Magni officia error delectus sint nemo voluptas corrupti itaque
             laboriosam ut necessitatibus.</p>
        </div>
        <div className="blog1">
        <h1>How to build a ecommerce page</h1>
          <h4> 12: 40 | Morning</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Magni officia error delectus sint nemo voluptas corrupti itaque
             laboriosam ut necessitatibus.</p>
        </div>
      </div>
    </section>
  )
}

export default Blog