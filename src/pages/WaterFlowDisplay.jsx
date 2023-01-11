import React,{useState, useEffect} from "react";
import ResponsiveDrawer from "../components/DashboardDrawer";
import FlowMeterDisplay from "./flowMeterDisplay";
import TankLevel from "./tankLevel";
import WaterLoss from "./waterLoss";
// import WaterQuality from "./waterQuality";
import WaterQuality from "./waterQuality";
import { Col, Row } from "antd";

const WaterFlowDisplay = () => {
    
  // const { mqttClient } = useAppContent();
  const [TankData, setTankData] = useState([
    {
      level_name: "level1",
      flow_rate: 0,
      total_flow: 0,
      voltage: 0,
      level: 0,
    }, {
      level_name: "level2",
      flow_rate: 0,
      total_flow: 0,
      voltage: 0,
      level: 0,
    },
  ]);

  const [FlowRateData, setFlowRateData] = useState([]);
  const [qualityStatusData, setQualityStatusData] = useState([]);

  const getTankData = (val) => {
    let num_tank = val.l_n;
    let data = [];
    for (let i = 0; i < num_tank; i++) {
      data[i] = val[`l_${i + 1}`];
    }
    setTankData(data);
  };

  const getWaterQualityData = (val) => {
    let num_quality = val.w_n;
    let data = [];
    for (let i = 0; i < num_quality; i++) {
      data[i] = val[`Q_${i + 1}`];
    }
    setQualityStatusData(data);
  }

  const getFlowRateData = (val) => {
    let num_flow = val.doc_num;
    let data = [];
    for (let i = 0; i < num_flow; i++) {
      data[i] = val[`d_${i + 1}`];
      data[i].key = i;
    }
    data.reverse(); //reverse array
    setFlowRateData(data);
  };

  // useEffect(() => {



  //   // if (mqttClient) {
  //   //   mqttClient.on("message", (topic, message) => {

  //   //     try {
  //   //       let data = JSON.parse(message);
  //   //       getFlowRateData(data);
  //   //       getTankData(data);
  //   //       getWaterQualityData(data);
  //   //     } catch (err) {
  //   //       console.log('err', err);

  //   //     }

  //   //   });
  //   // }
  // }, []);
  useEffect(() => {
    
    // try {
    //   fetch('http://localhost:5001/data/sensordata',{

    //   //   headers:{
    //   //     Authorization: "Bearer " +localStorage.getItem("jwt")
          
    //   // }
    //   }).then(res=>res.json())
    //   .then(result=>{

    //     console.log("MQTT ",result)
        
    //     getTankData(result.data);
    //     getFlowRateData(result.data);
    //     getValveData(result.data);
    //     getWaterQualityData(result.data);

    //   })
  
     
    // } catch (err) {
    //   console.log('error', err);
    // }

    const     data= {
      "doc_num": 18,
      "d_1": {
          "time": "2023-01-08T23:11:37",
          "flow_name": "RBP_endB",
          "flow_rate": "0.000  ",
          "total_flow": "-4736.000   ",
          "valve_position": 50
      },
      "d_2": {
          "time": "2023-01-08T23:11:37",
          "flow_name": "RBP_ColA",
          "flow_rate": "0.000  ",
          "total_flow": "14334.041   ",
          "valve_position": 30
      },
      "d_3": {
          "time": "",
          "flow_name": "BHU_RbpB",
          "flow_rate": "",
          "total_flow": "",
          "valve_position": 0
      },
      "d_4": {
          "time": "",
          "flow_name": "BHU_ColA",
          "flow_rate": "",
          "total_flow": "",
          "valve_position": 0
      },
      "d_5": {
          "time": "2023-01-08T23:11:53",
          "flow_name": "SCHOOL_BhuN",
          "flow_rate": "0.000  ",
          "total_flow": "4928.000    ",
          "valve_position": "N"
      },
      "d_6": {
          "time": "2023-01-08T23:11:53",
          "flow_name": "SCHOOL_ColA",
          "flow_rate": "0.000  ",
          "total_flow": "10513.130   ",
          "valve_position": 33
      },
      "d_7": {
          "time": "2022-12-27T22:16:59",
          "flow_name": "TOWN_SchoolN",
          "flow_rate": "",
          "total_flow": "4064.000    ",
          "valve_position": "N"
      },
      "d_8": {
          "time": "2022-12-27T22:16:59",
          "flow_name": "TOWN_LineA",
          "flow_rate": "-498.000",
          "total_flow": "5504.000    ",
          "valve_position": 46
      },
      "d_9": {
          "TIME": "",
          "flow_name": "TRI_TownB",
          "flow_rate": "",
          "total_flow": "",
          "valve_position": 0
      },
      "d_10": {
          "time": "",
          "flow_name": "Lower_TownA",
          "flow_rate": "",
          "total_flow": "",
          "valve_position": 0
      },
      "d_11": {
          "time": "",
          "flow_name": "KHPC_TankB",
          "flow_rate": "",
          "total_flow": "",
          "valve_position": 0
      },
      "d_12": {
          "time": "",
          "flow_name": "JE_ZimchungA",
          "flow_rate": "",
          "total_flow": "",
          "valve_position": 0
      },
      "d_13": {
          "time": "",
          "flow_name": "DepongA",
          "flow_rate": "147.44",
          "total_flow": "",
          "valve_position": 1
      },
      "d_14": {
          "time": "",
          "flow_name": "TsangkharN",
          "flow_rate": "23.547",
          "total_flow": "",
          "valve_position": "N"
      },
      "d_15": {
          "time": "2023-01-08T23:11:32",
          "flow_name": "Royal_TankA",
          "flow_rate": "7.313  ",
          "total_flow": "-171008.000 ",
          "valve_position": 1
      },
      "d_16": {
          "time": "",
          "flow_name": "Public_InR_B",
          "flow_rate": "",
          "total_flow": "",
          "valve_position": 1
      },
      "d_17": {
          "time": "",
          "flow_name": "Public_InL_B",
          "flow_rate": "",
          "total_flow": "",
          "valve_position": 0
      },
      "d_18": {
          "time": "",
          "flow_name": "Public_OutA",
          "flow_rate": "",
          "total_flow": "",
          "valve_position": 0
      },
      "l_n": 2,
      "l_1": {
          "time": "2023-01-08T23:11:32",
          "level_name": "Royal_Level",
          "level": "0.672  "
      },
      "l_2": {
          "time": "",
          "level_name": "Public_Level",
          "level": ""
      },
      "w_n": 3,
      "Q_1": {
          "Quality_name": "TDS",
          "time": "",
          "value": "34"
      },
      "Q_2": {
          "Quality_name": "PH",
          "time": "",
          "value": "789"
      },
      "Q_3": {
          "Quality_name": "Turbidity",
          "time": "",
          "value": "0"
      }
  }


  getFlowRateData(data);
  //   //       getTankData(data);
  //   //       getWaterQualityData(data);
    getTankData(data);
        getFlowRateData(data);
        // getValveData(data);
        getWaterQualityData(data);

}, []);

const waterFlowDisplayContent=   (
    <div>
      <Row gutter={[8, 8]}>
        <Col span={8}>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <FlowMeterDisplay data={FlowRateData} />
            </Col>
            <Col span={24}>
              <WaterLoss data={{}} />
            </Col>
          </Row>
        </Col>
        <Col span={16}>
          <TankLevel data={TankData} />
          <WaterQuality data={qualityStatusData} />
        </Col>
      </Row>
    </div>
  );

  return <ResponsiveDrawer box={waterFlowDisplayContent} />;
};

export default WaterFlowDisplay;
