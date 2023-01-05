import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import dhiLogo from '../assets/dhiLogo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navItems=[
{id:1, name:<Link to="/">Home</Link>, href:'#',selected:true},
{id:2, name:<Link to="/event-log">EventLog</Link>, href:'#',selected:false},
{id:3, name:<Link to="/alarms-and-events">Alarms and Events</Link>, href:'#',selected:false},
{id:4, name:<Link to="/login">Login</Link>, href:'#',selected:false},
  ];

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex items-center lg:justify-around  h-24  max-w-[1370px] mx-auto px-4 text-white'>
      <h1 className=' md:w-2/5 lg:w-1/5 sm:w-full w-full text-3xl font-bold '>
        <img className='z-40 w-20' src={dhiLogo} alt='/' />
      </h1>
      <ul className='hidden lg:w-4/5 text-lg md:justify-center md:flex '>
        {navItems.map((item) => (<li className='z-40 pt-7 pb-2 m-2 '>{item.name}</li>))}
        
      </ul>
      <div onClick={handleNav} className='block md:hidden z-40'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#101643] ease-in-out duration-500 z-40' : 'z-40 ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full m-4'>
        <img className='z-40 w-20' src={dhiLogo} alt='/' />
        </h1>
        {navItems.map((item) => ( <li className='p-4  text-lg border-b border-gray-600'>{item.name}</li>))}        
      </ul>
    </div>
  );
};

export default Navbar;
