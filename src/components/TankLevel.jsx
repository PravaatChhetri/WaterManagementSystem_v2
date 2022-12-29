import React from "react";
import { Liquid } from "@ant-design/plots";

const TankLevel = () => {
  const Tank1 = () => {
    const config = {
      percent: 0.75,
      width:450,
      height:450,    
      outline: {
        border: 0,
        distance:1,
      },
      wave: {
        length: 128,
      },
    };
    return (<div className="sm:grid-cols-1 my-3">

      <Liquid {...config} />
      <h1 className="text-center text-xl">Tank Royal</h1>

    </div>);
  };

  const Tank2 = () => {
    const config = {
      percent: 0.75,
      width:450,
      height:450,
      outline: {
        border: 0,
        distance: 1,
        
      },
      wave: {
        length: 128,
      },
    };
    return (<div className="sm:grid-cols-1 my-3">
      
      <Liquid {...config} />
      <h1 className="text-center text-xl">Tank Public</h1>
      </div>);
  };

  return (
    <div className="bg-black  w-full h-auto mx-auto text-white text-center">
      <h1 className="text-4xl font-bold py-10">Tank Level</h1>
      <div className="mx-auto justify-around my-5 w-[70vw] lg:flex bg-black sm:grid rounded-md  lg:h-[500px] sm:h-auto">
        <Tank1/>
        <Tank2/>
      </div>
      <button className="bg-[rgb(91,141,247)] p-2 my-8 rounded-md ">
        Learn More &nbsp;&gt;&gt;{" "}
      </button>
    </div>
  );
};

export default TankLevel;
