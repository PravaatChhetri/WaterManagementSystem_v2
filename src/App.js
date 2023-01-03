import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AlarmsAndEvents from './pages/AlarmsAndEvents';
import Calendar from './pages/Calendar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/alarms-and-events" element={<AlarmsAndEvents/>}/>
          <Route path="/calender" element={<Calendar/>}/>
          <Route path="*" element={<h1>You are Lost my dear</h1>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
