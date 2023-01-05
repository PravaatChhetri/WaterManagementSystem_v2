import React from 'react';
import '../index.css';

function WaterQuality() {
  const header=['TDS','pH', 'Turbidity'];
  const data=['10','7.45','100'];
  const detail=['TDS - Total Dissolved Solids','pH - Potential of Hydrogen','Turbidity - measure of the clarity of water']
  return (
   
    <div className=" bg-white w-full pb-10" id="blankSpace">
      <div>
         <h1 className="text-4xl font-bold py-10   text-center text-[#303030]">Water Quality</h1>
        </div>
          <div className='w-full h-300px lg:grid-flow-col grid-flow-row grid'>
              {header.map((item,index)=>{return (<div className='w-[95%] content-center rounded-md mb-3 py-[10px] bg-[#303030] text-white grid lg:grid-flow-row grid-flow-col mx-auto text-center font-bold text-3xl h-[300px]'>
                {item}
                <p className='text-[#689ed4]'>{data[index]}</p>

                <span className='text-sm'>{detail[index]}</span>
          </div>)})}
      </div>
    </div>
  );
}

export default WaterQuality;
