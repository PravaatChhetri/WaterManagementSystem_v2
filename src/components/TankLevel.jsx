import React from "react";
import { Liquid } from "@ant-design/plots";

export const Tank1 = (props) => {
  const config = {
    percent: 0.75,
    width:props.width,
    height:props.height,    
    outline: {
      border: 2,
      color: "#5B8FF9",
      
      distance: 0,
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

export const Tank2 = (props) => {
  const config = {
    percent: 0.75,
    width:props.width,
    height:props.height,
    outline: {
      border: 2,
      color: "#5B8FF9",
      distance: 0,
      
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


export const TankLevel = () => {

const val=450;
  return (
    <div className="bg-black  w-full h-auto mx-auto text-white text-center" id="tankLevel">
      <h1 className="text-4xl font-bold py-10">Tank Level</h1>
      <div className="mx-auto justify-around my-5 w-[70vw] lg:flex bg-black sm:grid rounded-md  lg:h-[500px] sm:h-auto">
        <Tank1 height={val} width={val} />
        <Tank2 height={val} width={val}/>
      </div>

    </div>
  );
};


