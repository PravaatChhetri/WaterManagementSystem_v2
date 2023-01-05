import React from 'react';
import Analytics from '../components/Analytics';
import Cards from '../components/Cards';
import Partner from '../components/Partner';
import Hero from '../components/Hero';
import WaterQuality from '../components/WaterQuality';
import {TankLevel} from '../components/TankLevel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
  <>
      <Navbar />
      <Hero />
      <Cards />
      <Analytics />
      <WaterQuality />
      <TankLevel/>
      <Partner />
      <Footer />
      
  </>
    );
}

export default Home;