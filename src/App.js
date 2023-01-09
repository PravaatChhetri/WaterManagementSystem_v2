import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
// import SignupPage from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DashHome from './pages/DashHome';
import SCADADisp from './pages/SCADADisp';
import ValveController from './pages/ValveController'; 
import AlarmEvents from './pages/AlarmEvents';
import EventLog from './pages/EventLog';
import WaterFlowDisplay from './pages/WaterFlowDisplay';
import ResponsiveDrawer from './components/DashboardDrawer';
import { useState } from 'react';



function App() {
  
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };
  
  return (
    <>
      <Router>
      {isLoggedIn ? (
        <button onClick={logOut}>Logout</button>
        ) : (
        <button onClick={logIn}>Login</button>
        )}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>

            <Route path="/DashBoard" element={<DashHome/>}/>
            <Route path="/DashBoard/SCADA-Display" element={<SCADADisp/>}/>
            <Route path="/DashBoard/Water-Flow-Display" element={<WaterFlowDisplay/>}/>
            <Route path="/DashBoard/Valve-Controller" element={<ValveController/>}/>
            <Route path="/DashBoard/Alarms-and-Events" element={<AlarmEvents/>}/>
            <Route path="/DashBoard/Event-Log" element={<EventLog/>}/>

          <Route path="/DashBoard/Log-Out" element={<ResponsiveDrawer box={<h1 className="text-center">Log Out</h1>}/>}/>
          
                
          <Route path="*" element={<h1>You are Lost my dear</h1>}/>
        </Routes>
        
      </Router>
      
    </>
  );
}

export default App;
