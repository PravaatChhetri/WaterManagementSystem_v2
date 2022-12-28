import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#3728a1] font-bold '>Water Management System DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Get Access to All Water Management System Data</h1>
          <p>
            This data will be accessable to all the people who live in the locality and will be using the water. 
            The information is very precise as it is calculated by the sensors and the data is stored in the database.

          </p>
          <button className='bg-[#343435] text-[#fafafa] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>View Data</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
