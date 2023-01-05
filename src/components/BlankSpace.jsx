import React from 'react';
import '../index.css';

function BlankSpace() {
  const header=['TDS','pH', 'Tubidity'];
  const data=['10','7.45','100'];
  return (
   
    <div className="site-card-wrapper w-full">
      <div>
         <h1 className="text-4xl font-bold py-10 text-center text-white">Water Quality</h1>
        </div>
          <div className='w-[90%] md:w-full h-200px lg:grid-flow-col grid-flow-row grid'>
              {header.map((item,index)=>{return (<div className='w-[90%] content-center rounded-md mb-3 py-[10px] bg-white grid lg:grid-flow-row grid-flow-col mx-auto text-center font-bold text-3xl h-[100px]'>
                {item}
                <p className='text-[#2bcaff]'>{data[index]}</p>
          </div>)})}
      </div>
    </div>
  );
}

export default BlankSpace;
