import React from 'react';
import dhi from '../assets/dhiLogo.png';
import desu from '../assets/desu-2.png';
import rgob from '../assets/rgob.png'


const Partner = () => {
  return (
    <div className='w-full h-auto bg-[#F7F9FF]'>

      <h1 className='text-center py-[3rem] font-medium text-3xl'>Our Partner's</h1>
      <div className='justify-around grid lg:grid-cols-3 sm:grid-cols-1 pb-20 h-auto'>
        <div className='flex justify-center pb-10 items-center'>
          <a href='https://www.dhi.bt' target='_blank' rel="noreferrer">
          <img src={dhi} alt='unknown' className='w-[200px] h-[200px]' />
          </a>
        </div>
        <div className='flex justify-center pb-10 items-center'>
          <a href="https://www.desuung.org.bt" target='_blank' rel="noreferrer" >
          <img src={desu} alt='unknown' className='w-[200px] h-[200px]' />
          </a>       
        </div>
        <div className='flex justify-center pb-10 items-center'>
          <a href="https://www.gov.bt" target='_blank' rel="noreferrer">
          <img src={rgob} alt='unknown' className='w-[200px] h-[200px]' />
          </a>        
        </div>
      </div>

    </div>
  )
}

export default Partner