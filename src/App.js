import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Blog from './components/Blog';
import Works from './components/Works';
import Footer from './components/Footer';
import { BrowserRouter  } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
     <Navbar />
     <Hero />
     <Blog />
     <Works />
     <Footer />
    </BrowserRouter>
  )
}

export default App