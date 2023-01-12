import React from "react";
import desu from "../assets/desu-2.png";
import rGlogo from "../assets/rgob.png";
import Grid from "@mui/material/Grid";
import { Liquid } from "@ant-design/plots";

export const Header = (props) => {
  const imageSize = "8%";
  return (
    <div
    className="flex flex-wrap content-center justify-between"
    >
      {}
      <img src={desu} height={imageSize} width={imageSize} alt="desu" />
      <h1 className="text-sm md:text-2xl font-bold">
        Gyelpozhing Water Management System
      </h1>
      <img src={rGlogo} height={imageSize} width={imageSize} alt="rGlogo" />
    </div>
  );
};

// Dash Home page components
export const TankLevel = ({ data }) => {
  return (
    <Grid lg={6} className="mb-5 p-3 mt-3 content-center w-full">
      <h1 className="text-2xl text-[#434343] text-center font-bold"> Tank Level</h1>
      <div className="w-full">
      <div className="flex ">
        <div className="flex flex-col md:flex-row justify-center w-full">
          {data.map((val, i) => {
            return (
              <div key={i}  >
                <Liquid
                  {...{
                    percent: val.level / 10,
                    color: val.level < 1 ? "#ff0000" : "#10b4eb",
                    outline: {
                      border: 3,
                      distance: 3,
                    },
                    width: 200,
                    height: 200,
                    wave: {
                      length: 225,
                    },
                  }}
                />
                <p className="sub_title text-center">{val.level_name}</p>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </Grid>
  );
};

export const FlowRateDisplay = ({ data }) => {
  return (
    <Grid lg={6} className="pl-6 pr-3 py-3 ">
      <h1 className="text-2xl font-bold text-center text-[#434243]">Flow Rate Display</h1>
      <div className="flex flex-wrap justify-start content-start gap-2">
        {data.map((val, i) => {
          return (
            <div
              className="p-5 mb-1 mx-auto lg:mx-0 hover:shadow-2xl hover:scale-[105%] transition duration-300 ease-in-out"
              style={{
                backgroundColor: val.flow_rate < 5 ? "#d1330a" : "#0b9406",
                width: 130,
                height: 90,
                borderRadius: 15,
              }}
            >
              <p
                className="text-sm text-center"
                style={{ fontWeight: "bold", color: "white" }}
              >
                {val.flow_name}
              </p>

              <p
                className="text-center"
                style={{ fontWeight: "bold", color: "white" }}
              >
                {val.flow_rate}
              </p>
            </div>
          );
        })}
      </div>
    </Grid>
  );
};

export const ValveController = ({ data }) => {
  return (
    <Grid lg={6} className="p-3">
        <h1 className="text-2xl font-bold text-center text-[#434243]">Valve Controller</h1>
      <div className="flex flex-wrap justify-start content-start gap-2">
        {data.map((val, i) => {
          return (
            <div
              className="p-5 mb-1 mx-auto lg:mx-0 hover:shadow-lg hover:scale-[105%] transition duration-300 ease-in-out"
              style={{
                backgroundColor: "#10b4eb",
                width: 130,
                height: 90,
                borderRadius: 15,
              }}
            >
              <p
                className="text-sm text-center"
                style={{ fontWeight: "bold", color: "white" }}
              >
                {val.flow_name}
              </p>

              <p className="text-center" style={{ fontWeight: "bold", color: "white" }}>
                {val.valve_position}
              </p>
            </div>
          );
        })}
      </div>
    </Grid>
  );
};

export const WaterQuality = ({ data }) => {
  return (
    <Grid lg={6} className="">
      <h1 className="text-2xl font-bold text-[#434343] text-center">Water Quality</h1>
      <div className="flex gap-2 flex-wrap content-center justify-center">
        {data.map((val, i) => {
          return (
            
            <div className="bg-[#00437a] w-[205px] h-[170px] m-3 flex flex-wrap content-center rounded-md hover:shadow-2xl hover:scale-[105%] transition duration-300 ease-in-out">
              <div className="mx-auto">
                <p
                  className="text-xl align-middle text-center"
                  style={{ color: "white" }}
                >
                  {val.Quality_name}
                </p>
                <p className="text-lg text-center" style={{ color: "white" }}>
                  {val.value}
                </p>
              </div>
            </div>
         
          );
        })}
      </div>
    </Grid>
  );
};
