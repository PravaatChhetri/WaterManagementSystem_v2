import React from 'react';
import Analytics from '../components/Analytics';
import Cards from '../components/Cards';
import Partner from '../components/Partner';
import Hero from '../components/Hero';
import BlankSpace from '../components/BlankSpace';
import TankLevel from '../components/TankLevel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
  <>
      <Navbar />
      <Hero />
      <Analytics />
      <BlankSpace />
      <Cards />
      <TankLevel/>
      <Partner />
      <Footer />
      
  </>
    );
}

export default Home;