import React from 'react';
import dhiLogo from '../assets/dhiLogo.png';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {

  const navItems=[
    {id:1, name:'Home', href:'#',selected:true},
    {id:2, name:'Calender', href:'#',selected:false},
    {id:3, name:'Alarms and Events', href:'#',selected:false},
      ];

  return (
    <div className=' mx-auto py-16  w-full grid md:grid-cols-2 lg:grid-cols-4 gap-2 text-gray-300'>
      <div className='ml-5'>
        <h1 className='w-full text-3xl font-bold '>
        <img className=' w-20' src={dhiLogo} alt='/' />
        </h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[50%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      {/* <div className='lg:col-span-2 flex justify-between mt-6'> */}
    <div className='sm:grid-cols-12 mx-auto my-10'>
        <h4 className=' text-gray-400'>Nav Links</h4>
        <ul>
        {navItems.map((item) => (<li className='py-2 px-auto'>{item.name}</li>))}
        </ul>
    </div>
    <div className='sm:grid-cols-12 mx-auto text-lg my-10'>
      < h4 className=' text-gray-400'>Contact Details</h4>
      <p >Address: Thimphu TechPark, Thimphu, Bhutan</p>
      <p >Email:dhiInfo@dhi.bt</p>
      <p >Phone No: +975 17606060</p>
    </div>

    <div className='sm:grid-cols-12 h-[300px] w-full px-5 mx-auto '>
    <iframe title="gMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11699.3583210219!2d91.19877807218158!3d27.240270171929115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375eab9ff9094391%3A0xbf36fb609433862e!2sKuri%20Chu%20Beach!5e0!3m2!1sen!2sbt!4v1672169589197!5m2!1sen!2sbt" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
      
    </div>
  );
};

export default Footer;
