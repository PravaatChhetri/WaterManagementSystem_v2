import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EventLogHome = () => {
  const EventLogContent = () => {
    return (
      <div className="bg-[#F5F8FF] grid lg:grid-cols-2 gap-8 p-5 h-[500px] w-full">
        <div className="bg-white shadow-lg shadow-black mx-auto w-40 h-80 rounded-lg"></div>
        <div className="bg-white shadow-lg shadow-black mx-auto w-40 h-80 rounded-lg"></div>
      </div>
    );
  };



  return (
    <>
      <Navbar />
      <EventLogContent />
      <Footer />
    </>
  );
};

export default EventLogHome;
