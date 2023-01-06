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
    width: 1000,
    height: 600,
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

      if (sensorType === 'FlowMeter') {
        if (period === "anyday") {
          let response = await getDailyData({ date, secondSensor});
          console.log(response.result)
          setData(response.result)
          return response.result
          // let filterdata = response.result.filter((val) => {
          //   return val.flow_name === secondSensor;
          // });
        //   setData(filterdata);

        } else if (period === "month") {
          let response = await getMonthlyData({ date,secondSensor });
         
            setData(response.anyMonthData)
          // let filterdata = response.filter((val) => {

            
          //   return val.flow_name === secondSensor;
          // });
          // setData(filterdata);
        } else if (period === "weekly") {
          let response = await getWeeklyData({ date,secondSensor });

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
          setData(response.anyDayData);
        } else if (period === "month") {
          let response = await getMonthlyDataLevel({ date,secondSensor });
          // let filterdata = response.filter((val) => {
          //   return val.level_name === secondSensor;
          // })
          setData(response.anyMonthData);

        } else if (period === "weekly") {
          let response = await getWeeklyDataLevel({ date,secondSensor });
          // let filterdata = response.filter((val) => {
          //   return val.level_name === secondSensor;
          // })
          setData(response.weeklydata);
        }
      } else if (sensorType == 'QualitySensor') {
        if (period === 'anyday') {
          let response = await getDailyDataQuality({ date,secondSensor });
          // let filterdata = response.filter((val) => {
          //   return val.value_name === secondSensor;
          // })
          setData(response.anyDayData);
        }
      } else if (period === "month") {
        let response = await getMonthlyDataQuality({ date,secondSensor });
        // let filterdata = response.filter((val) => {
        //   return val.level_name === secondSensor;
        // })
        setData(response.anyMonthData);

      } else if (period === "weekly") {
        let response = await getWeeklyDataQuality({ date, secondSensor });
        // let filterdata = response.filter((val) => {
        //   return val.level_name === secondSensor;
        // })
        setData(response.weeklydata);
      }


    } catch (err) {
      console.log(err)
    }

  }

  return (<>
  

  <>
      <Card
        style={{
          borderRadius: 16,
          padding: 12,
          minHeight: 330,
        }}
      >
        <h1>Select Date</h1>

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
        <Select value={secondSensor} style={{ width: 140, }} onChange={OnSecondSensorChange}>
          {sensor.map((sensor) => (
            <Option key={sensor}>{sensor}</Option>
          ))}
        </Select>

        <PickWithType value={date} onChange={getDate} ></PickWithType>
        <Button type="primary" onClick={senddata}>Fetch</Button>
        <Column {...config}></Column>
      </Card>

    </>
  
  
  
  </>);
};

export default EventLogFetch;
