import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Partner from './components/Partner';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import BlankSpace from './components/BlankSpace';
import TankLevel from './components/TankLevel';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <BlankSpace />
      <Cards />
      <TankLevel/>
      <Partner />
      <Footer />
    </div>
  );
}

export default App;
