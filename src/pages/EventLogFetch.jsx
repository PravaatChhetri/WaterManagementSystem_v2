import React,{useState} from "react";
import ResponsiveDrawer from "../components/DashboardDrawer";
import { Card, Table, DatePicker, Select, Button, message } from "antd";
import { Line, Bar, Column } from '@ant-design/plots'



import { getDailyData, getDailyDataLevel, getDailyDataQuality } from './FetchLog'
import { getMonthlyData, getMonthlyDataLevel, getMonthlyDataQuality } from "./FetchLog";
import { getWeeklyData, getWeeklyDataLevel, getWeeklyDataQuality } from "./FetchLog";


const { Option } = Select;

const sensorData = ['FlowMeter', 'LevelSensor', 'QualitySensor'];
const eachSensorData = {
  FlowMeter: ['Public_OutA', 'Public_InL_B', 'Public_InR_B', 'Royal_TankA', 'TsangkharN',
              'DepongA', 'JE_ZimchungA', 'KHPC_TankB', 'Lower_TownA', 'TRI_TownB', 'TOWN_LineA',
              'TOWN_SchoolN', 'SCHOOL_ColA', 'SCHOOL_BhuN', 'BHU_ColA', 'BHU_RbpB', 'RBP_ColA', 'RBP_endB'],
  LevelSensor: ['Royal_Level', 'Public_Level'],
  QualitySensor: ['TDS', 'PH', 'Turbidity'],
};

const EventLogFetch = () => {


    const PickWithType = ({ type, onChange }) => {
        if (type === 'date') return <DatePicker onChange={onChange} />;
        return <DatePicker picker={type} onChange={onChange}></DatePicker>
      }

    const [data, setData] = useState([]);
  const [date, setDate] = useState(new Date());

  const [period, setPeriod] = useState('anyday');

  const [sensor, setSensors] = useState(eachSensorData[sensorData[0]]);
  const [secondSensor, setSecondSensor] = useState(eachSensorData[sensorData[0]][0]);
  const [sensorType, setSensorType] = useState('FlowMeter');
  const [yField, setYField] = useState('flow_rate');
  const [dataload,setDataLoad] = useState(false)

  const eventLogContent = <div></div>;



  const handleSensorChange = (value) => {
    setSensors(eachSensorData[value]);
    setSecondSensor(eachSensorData[value][0]);
    setSensorType(value);
    if (value === 'LevelSensor') {
      setYField('level');
    } else if (value === 'FlowMeter') {
      setYField('flow_meter');
    } else if (value === 'QualitySensor') {
      setYField('value');
    }
  };

  const OnSecondSensorChange = (value) => {
    setSecondSensor(value);
  };


  const config = {
    data,
   
    autoFit: true,
    xField: 'createdAt',
    xAxis: {
      label:false
    },
    

    yField: yField,

    slider: {
      start: .0,
      end : .1
    },

  }

  async function getDate(data, dataSting) {
    console.log("Date",dataSting)
    return setDate(dataSting);
  }



  async function senddata() {

    try {

      setDataLoad(true)

      if (sensorType === 'FlowMeter') {
        if (period === "anyday") {
          let response = await getDailyData({ date, secondSensor});
          // console.log(response.result)
          setDataLoad(false)

          setData(response.result)
          return response.result
          // let filterdata = response.result.filter((val) => {
          //   return val.flow_name === secondSensor;
          // });
        //   setData(filterdata);

        } else if (period === "month") {
          let response = await getMonthlyData({ date,secondSensor });
          setDataLoad(false)

            setData(response.anyMonthData)
          // let filterdata = response.filter((val) => {

            
          //   return val.flow_name === secondSensor;
          // });
          // setData(filterdata);
        } else if (period === "weekly") {
          let response = await getWeeklyData({ date,secondSensor });
          setDataLoad(false)

          setData(response.weekData)
          // let filterdata = response.filter((val) => {
          //   return val.flow_name === secondSensor;
          // })
          // setData(filterdata);
        }


      } else if (sensorType === 'LevelSensor') {
        if (period === "anyday") {
          let response = await getDailyDataLevel({ date,secondSensor });
          // let filterdata = response.filter((val) => {
          //   return val.level_name === secondSensor;
          // })
          setDataLoad(false)

          setData(response.anyDayData);
        } else if (period === "month") {
          let response = await getMonthlyDataLevel({ date,secondSensor });
          // let filterdata = response.filter((val) => {
          //   return val.level_name === secondSensor;
          // })
          setDataLoad(false)

          setData(response.anyMonthData);

        } else if (period === "weekly") {
          let response = await getWeeklyDataLevel({ date,secondSensor });
          // let filterdata = response.filter((val) => {
          //   return val.level_name === secondSensor;
          // })
          setDataLoad(false)

          setData(response.weeklydata);
        }
      } else if (sensorType == 'QualitySensor') {
        if (period === 'anyday') {
          let response = await getDailyDataQuality({ date,secondSensor });
          // let filterdata = response.filter((val) => {
          //   return val.value_name === secondSensor;
          // })
          setDataLoad(false)

          setData(response.anyDayData);
        }
      } else if (period === "month") {
        let response = await getMonthlyDataQuality({ date,secondSensor });
        // let filterdata = response.filter((val) => {
        //   return val.level_name === secondSensor;
        // })
        setDataLoad(false)

        setData(response.anyMonthData);

      } else if (period === "weekly") {
        let response = await getWeeklyDataQuality({ date, secondSensor });
        // let filterdata = response.filter((val) => {
        //   return val.level_name === secondSensor;
        // })
        setDataLoad(false)

        setData(response.weeklydata);
      }


    } catch (err) {
      console.log(err)
    }

  }

  return (
  


      <div
  className="  sm:min-h-[330px] mt-[130px] sm:mt-0 rounded-xl p-7 bg-[#f3f3f1] mx-2 "
      >
        <div className="flex flex-col lg:flex-row">
        <h1 className="text-center" >Select Date</h1>

        <div className="flex justify-evenly">
        <Select value={period} style={{ width: 120, }} onChange={setPeriod}>
          <Option value="anyday">Any Date</Option>
          <Option value="weekly">Weekly</Option>
          <Option value="month">Month</Option>
        </Select>
        <Select defaultValue={sensorData[0]} style={{ width: 140, }} onChange={handleSensorChange}>
          {sensorData.map((sensor) => (
            <Option key={sensor}>{sensor}</Option>
          ))}
        </Select>
        </div>
        <div className="flex justify-center">

        <Select value={secondSensor} style={{ width: 140, }} onChange={OnSecondSensorChange}>
          {sensor.map((sensor) => (
            <Option key={sensor}>{sensor}</Option>
          ))}
        </Select>

        <PickWithType value={date} onChange={getDate} ></PickWithType>
        </div>
        <Button 
        
        type="button" class=" py-1 px-2 bg-blue-600 hover:bg-indigo-500 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-16 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        
        
        onClick={senddata}>Fetch</Button>

            {dataload?<>
              <svg class="animate-spin h-8 w-8 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" />  <path d="M11 19.95a8 8 0 0 1 -5.3 -12.8" stroke-dasharray=".001 4.13" /></svg>
            Loading...
            </>:<></>}
        </div>
        <div className="flex flex-wrap w-full">
        <Column {...config}></Column>
        </div>
      </div>

    
  
  
  
);
};

export default EventLogFetch;
