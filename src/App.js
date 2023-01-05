import React from 'react';
import Home from './pages/Home';
import AlarmsAndEvents from './pages/AlarmsAndEvents';
import EventLogHome from './pages/Calendar';
import Login from './pages/Login';
// import SignupPage from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dash from './pages/Dash';
import PrivateRoutes from './utils/PrivateRoutes';
import DashHome from './pages/DashHome';
import SCADADisp from './pages/SCADADisp';
import ValveController from './pages/ValveController'; 
import AlarmEvents from './pages/AlarmEvents';
import EventLog from './pages/EventLog';
import WaterFlowDisplay from './pages/WaterFlowDisplay';
import ResponsiveDrawer from './components/DashboardDrawer';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/alarms-and-events" element={<AlarmsAndEvents/>}/>
          <Route path="/event-log" element={<EventLogHome/>}/>
          <Route path="/login" element={<Login/>}/>

          <Route path="/DashBoard" element={<DashHome/>}/>
          <Route path="/DashBoard/SCADA-Display" element={<SCADADisp/>}/>
          <Route path="/DashBoard/Water-Flow-Display" element={<WaterFlowDisplay/>}/>
          <Route path="/DashBoard/Valve-Controller" element={<ValveController/>}/>
          <Route path="/DashBoard/Alarms-and-Events" element={<AlarmEvents/>}/>
          <Route path="/DashBoard/Event-Log" element={<EventLog/>}/>
          <Route path="/DashBoard/Log-Out" element={<ResponsiveDrawer box={<h1 className="text-center">Log Out</h1>}/>}/>

          
          
          
          <Route element={<PrivateRoutes />}>
                <Route element={<Dash/>} path="/dash" exact/>
            </Route>
         
         {/* <Route path="/dash" element={<Dash/>}/> */}
         
         
         
          <Route path="*" element={<h1>You are Lost my dear</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
