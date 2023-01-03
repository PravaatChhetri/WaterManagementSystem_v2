import React from 'react';
import Analytics from '../components/Analytics';
import Cards from '../components/Cards';
import Partner from '../components/Partner';
import Hero from '../components/Hero';
import BlankSpace from '../components/BlankSpace';
import TankLevel from '../components/TankLevel';

const Home = () => {
  return (
  <>
      <Hero />
      <Analytics />
      <BlankSpace />
      <Cards />
      <TankLevel/>
      <Partner />
  </>
    );
}

export default Home;