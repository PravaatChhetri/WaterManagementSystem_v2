import React,{ useState, useContext ,createContext, useReducer} from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
// import SignupPage from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './utils/ProtectedRoutes';

import DashHome from './pages/DashHome';
import SCADADisp from './pages/SCADADisp';
import ValveController from './pages/ValveController'; 
import AlarmEvents from './pages/AlarmEvents';
import EventLog from './pages/EventLog';
import WaterFlowDisplay from './pages/WaterFlowDisplay';
import {reducer,initialState} from "./reducers/userReducer"
import ResponsiveDrawer from './components/DashboardDrawer';
export const UserContex = createContext()

function App() {
  const [state, dispatch] = useReducer(reducer,initialState)

  const [isLoggedIn, setisLoggedIn] = useState(true);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };
  
  
  
  return (
    <>
        <UserContex.Provider value={{state,dispatch}}>

      <Router>
        {isLoggedIn ? (
        <button onClick={logOut}>Logout</button>
        ) : (
        <button onClick={logIn}>Login</button>
        )}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<h1 className='text-white'>You are Lost my dear</h1>}/>

          <Route  element={<ProtectedRoutes/>}>
          <Route path="/Dashboard" element={<DashHome/>}/>
          <Route path="/Dashboard/SCADA-Display" element={<SCADADisp/>}/>
          <Route path="/Dashboard/Water-Flow-Display" element={<WaterFlowDisplay/>}/>
          <Route path="/Dashboard/Valve-Controller" element={<ValveController/>}/>
          <Route path="/Dashboard/Alarms-and-Events" element={<AlarmEvents/>}/>
          <Route path="/Dashboard/Event-Log" element={<EventLog/>}/>
          <Route path="/Dashboard/Log-Out" element={<ResponsiveDrawer box={<h1 className="text-center">Log Out</h1>}/>}/>
          </Route>
        </Routes>
      </Router>
      </UserContex.Provider>

    </>
  );
}

export default App;
