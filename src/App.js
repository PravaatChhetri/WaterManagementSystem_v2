import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AlarmsAndEvents from './pages/AlarmsAndEvents';
import Calendar from './pages/Calendar';
import LoginPage from './components/Login/Login';
// import SignupPage from './pages/Signup';
import { useState } from 'react';
import Protected from './components/Protected';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut =() => {
    setisLoggedIn(false);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        {isLoggedIn ? (
          <button onClick={logOut}>Logout</button>
        ) : (
          <button onClick={logIn}>Login</button>
        )}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/alarms-and-events" element={<AlarmsAndEvents/>}/>
          <Route path="/calendar" element={ 
          <Protected isLoggedIn = {isLoggedIn}>
                  <Calendar/>
          </Protected>
          }/>
          <Route path="/login" element={<LoginPage/>} />
          {/* <Route path="/signup" element={<SignupPage/>} /> */}
          <Route path="*" element={<h1>You are Lost my dear</h1>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
