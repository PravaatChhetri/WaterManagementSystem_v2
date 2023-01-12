import React from 'react';
import '../index.css';

function WaterQuality({data}) {
  // const header=['TDS','pH', 'Turbidity'];
  // const data=['10','7.45','100'];
  const detail=['TDS - Total Dissolved Solids','pH - Potential of Hydrogen','Turbidity - measure of the clarity of water']
  return (
   
    <div className=" bg-white w-full pb-10" id="blankSpace">
      <div>
         <h1 className="text-4xl font-bold py-10   text-center text-[#303030]">Water Quality</h1>
        </div>
          <div className='w-full h-300px lg:grid-flow-col grid-flow-row grid'>
              {data.map((item,index)=>{return (<div className='w-[95%] content-center rounded-md mb-3 py-[10px] bg-[#303030] text-white grid lg:grid-flow-row grid-flow-col mx-auto text-center font-bold text-3xl h-[300px]'>
                {item.Quality_name}
                <p className='text-[#689ed4]'>{index === 1 ? item.value / 100 : item.value}</p>

                <span className='text-sm'>{detail[index]}</span>
          </div>)})}
      </div>
    </div>
  );
}

export default WaterQuality;



// import { Card, Col, Row } from "antd";

// export default function WaterQuality({ data }) {

//   return (
//     <Card style={{ borderRadius: 16, height: 160 }}>
//       <p className="big_title" style={{ color: 'black' }}>Water Quality</p><br />
//       <Row justify="space-around" gutter={[16, 0]}>
//         {data.map((val, i) => {
//           return (
//             <Col key={i}>
//               <Row justify="space-evenly">
//                 <Col span={24} style={{ width: 50 }}>
//                   <p className="sub_title">{val.Quality_name}</p>
//                 </Col>
//                 <Col span={24} style={{ width: 50 }}>
//                   <p className="sub_title">{i === 1 ? val.value / 100 : val.value}</p>
//                 </Col>
//               </Row>
//             </Col>
//           );
//         })}
//       </Row>
//     </Card>
//   );
// }
