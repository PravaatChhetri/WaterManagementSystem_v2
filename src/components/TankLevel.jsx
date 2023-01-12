import React from "react";
import { Liquid } from "@ant-design/plots";

export const Tank1 = ({data}) => {
  const config = {
    percent: data[0].level/100,
    width:450,
    height:450,    
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

export const Tank2 = ({data}) => {
  const config = {
    percent: data[1].level/100,
    width:450,
    height:450,
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


export const TankLevel = ({data}) => {

//const val=450;
  return (
    <div className="bg-black  w-full h-auto mx-auto text-white text-center" id="tankLevel">
      <h1 className="text-4xl font-bold py-10">Tank Level</h1>
      <div className="mx-auto justify-around my-5 w-[70vw] lg:flex bg-black sm:grid rounded-md  lg:h-[500px] sm:h-auto">
        <Tank1 data={data} />
        <Tank2 data={data}/>
      </div>

    </div>
  );
};


// import { Card, Col, Row } from "antd";
// import { Liquid } from "@ant-design/plots";

// export default function TankLevel({ data }) {


//   console.log("Tank",data)
//   const total_capacity = 100;
//   return (
//     <div style={{ textAlign: "center" }}>
//       <Row gutter={[12, 12]}>
//         <Col span={24}>
//           <Card
//             style={{
//               borderRadius: 16,
//               backgroundColor: "#294c96",
//               textAlign: "center",
//             }}
//           >
//             <span className="big_title">Tank Water Level</span>
//           </Card>
//         </Col>

//         <Col span={24}>
//           <Card style={{ borderRadius: 16, maxHeight: 250 }}>
//             <Row>
//               {data.map((val, i) => {
//                 return (
//                   <Col key={i} span={12}>
//                     <Liquid
//                       {...{
//                         percent: val.level * (1 / total_capacity),
//                         outline: {
//                           border: 3,
//                           distance: 3,
//                         },
//                         width: 200,
//                         height: 200,
//                         wave: {
//                           length: 225,
//                         },
//                       }}
//                     />
//                     <p className="sub_title">{val.level_name}</p>
//                   </Col>
//                 );
//               })}
//             </Row>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// }