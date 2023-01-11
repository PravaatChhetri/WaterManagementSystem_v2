import React, { useState, useEffect } from "react";
import { Button, Card, Col, Row } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Gauge } from "@ant-design/plots";
// import { useAppContent } from "../../../context/content";

const SERVER = process.env.NEXT_PUBLIC_SERVER;

export default function ValveGuage({
  currentValve,
  setCurrentValve,
  node
}) {
//   const { mqttPublish } = useAppContent();

  let [ValveValue, setValveValue] = useState('');
  let [mqttValue, setMqttValve] = useState("");

  const getCurrentData = async () => {
    let body = {
      node_name: node.node,
      valve_name: node.valve,
    };
    let response = await fetch(SERVER + "/data/specific", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    response = await response.json();
    setCurrentValve(response.data);
  };

  const postServer = async ({ val }) => {
    try {
      let { node_name, valve_name } = currentValve;
      let url = SERVER + "/data/valvedata"; //update API
      let date = new Date();
      date = date.toISOString();
      let body = {
        node_name,
        valve_name,
        valve_percent: val,
        valve_status: val == 0 ? "CLOSE" : "OPEN",
        date,
      };
      let response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      response = await response.json();
      if (response.status) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleIncrement = () => {
    if (ValveValue < 100) {
      let newVal = Number(ValveValue) + 5;
      if (newVal > 90) {
        setValveValue(90);
        setMqttValve('i')
      } else {
        setValveValue(newVal);
        setMqttValve('i')
      }
    }
  };

  const handleDecrement = () => {

    if (ValveValue > 0) {

      let newVal = ValveValue - 5;
      if (newVal == 0) {
        setValveValue(0);
        setMqttValve('c')
      } else {
        setValveValue(newVal);
        setMqttValve('r')
      }
    }
  };

  const handleValve = () => {
    console.log(currentValve.node_name);
    // mqttPublish({
    //   topic: currentValve.node_name,
    //   val: currentValve.valve_name + mqttValue + String(ValveValue),
    // });
    postServer({ val: ValveValue });
    getCurrentData();
  };

  useEffect(() => {
    setValveValue(currentValve.valve_percent);
  }, [currentValve]);

  //guage config
  const config = {
    percent: ValveValue / 100,
    range: {
      color: "l(0) 0:#B8E1FF 1:#3D76DD",
    },
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    indicator: null,
    statistic: {
      title: {
        offsetY: -36,
        style: {
          fontSize: "36px",
          color: "white",
        },
        formatter: () => `${ValveValue}%`,
      },
      content: {
        style: {
          fontSize: "24px",
          lineHeight: "44px",
          color: "white",
        },
        formatter: () => "Valve",
      },
    },
  };

  return (
    <div className="w-[90%] mx-auto ">
    <div className=" rounded-md py-3 bg-[#294c96] min-h-[60px]">
      <h1 className="text-white text-center font-bold text-lg"> Valve Gauge</h1>
    </div>
    <div className="rounded-md mt-3 p-5 bg-[#294c96] min-h-[420px]">
      <div>
        <div>
        <Gauge {...config} height={200} width={300} />
        <div className="flex justify-center mt-10">
        
                <button className="w-[50px] bg-white text-black rounded-full" onClick={handleDecrement} ><DownOutlined/></button>
                 <button className="text-center text-xl text-white font-bold px-5 align-middle">Turn Valve</button>
                <button className="w-[50px] h-[50px] bg-white text-black rounded-full" onClick={handleIncrement} ><UpOutlined/></button>

        </div>
        </div>
      </div>

    </div>
     
    </div>
  );
}
