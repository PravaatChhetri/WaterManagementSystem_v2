import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white z-0'>
      <div className=' mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#5B8DF7] font-bold p-2'>
          Getting Data Of Your Water
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          How is water in your locality
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Water information about
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['it\'s pH', 'water level']}
            typeSpeed={200}
            backSpeed={220}
            loop
          />
        </div> 

        <button className='bg-[#5B8DF7] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
     
      </div>
    </div>
  );
};

export default Hero;
