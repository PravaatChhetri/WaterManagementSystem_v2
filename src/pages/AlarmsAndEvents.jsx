import React from 'react'
import { FaBell } from 'react-icons/fa';
const AlarmsAndEvents = () => {
  return (
    <div className='bg-white h-[500px] w-full'>
        <div className='h-1/2 bg-black opacity-90 w-full pl-20 z-0 '>
        <h1 className='text-white'>
            <FaBell size="150"/>
            </h1>
    </div>
        
        <div className='flex flex-col justify-center items-center py-auto'>
            <h1 className='text-2xl font-bold'>Alarms and Events</h1>
        </div>

    </div>
  )
}

export default AlarmsAndEvents;