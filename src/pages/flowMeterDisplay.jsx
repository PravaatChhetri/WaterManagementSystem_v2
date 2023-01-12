import {  Select } from "antd";
import { useState } from "react";

export default function FlowMeterDisplay({ data }) {
  const [SelectFlowData, setSelectFlowData] = useState({
    flow_rate: 0,
    total_flow: 0,
  });
  return (
    <div className="p-7 bg-[#294c96] shadow-md w-full rounded-xl" >
      <p className="text-xl font-bold text-white text-center">Flow Meter Display</p>
      <div className="bg-white rounded-lg mt-3 p-3">
        <Select
          className="w-[180px]"
          placeholder="Select Zone"
          onChange={(val) => {
            setSelectFlowData(data[val]);
          }}
        >
          {data.map((val, i) => {
            return (
              <Select.Option key={i} value={val.key}>
                {val.flow_name}
              </Select.Option>
            );
          })}
        </Select>
       
        <div className="flex justify-evenly p-7">
            <div >
              <p className="sub_title">Flow Rate</p>
              <b>{SelectFlowData.flow_rate}</b>
            </div>
            <div>
              <p className="sub_title">Total Flow</p>
              <b>{SelectFlowData.total_flow}</b>
            </div>
          
        </div>
      </div>
    </div>
  );
}
