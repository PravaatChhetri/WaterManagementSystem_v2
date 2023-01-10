import React,{useState,useEffect} from "react";
import ResponsiveDrawer from "../components/DashboardDrawer";
import io from 'socket.io-client';
import { Card, Table } from "antd";

const AlarmEvents = () => {
  const [input, setInput] = useState('No Data')
  const [rbp, setRbp] = useState('No Data')
  const [bhu, setBhu] = useState('No Data')
  const [school, setSchool] = useState('No Data')
  const [terrace, setTerrace] = useState('No Data')
  const [kst, setKst] = useState('No Data')
  const [maintown, setMainTown] = useState('No Data')
  const [chabjey, setChabjey] = useState('No Data')



  useEffect(() => { SocketInitializer()},[])

  const SocketInitializer = async () => {
    const socket = await io('http://localhost:5001');
    socket.on('connection', () => {
      console.log('socket Connected')
    })
    socket.on('message', (data) => {
      let userobj = JSON.parse(data)
      const small_town = userobj.small_town;
      setInput(small_town);
      const rbp = userobj.RBP;
      setRbp(rbp);
      const bhu = userobj.BHU;
      setBhu(bhu);
      const school = userobj.School;
      setSchool(school);
      const terrace = userobj.Terrace;
      setTerrace(terrace);
      const chabjey = userobj.Chabjey;
      setChabjey(chabjey)
      const main_town = userobj.Main_Town;
      setMainTown(main_town);
      const kst = userobj.KST;
      setKst(kst);
    })
  }

  const Data = [

    {
      key: 1,
      name: "Small Town",
      flow_rate_diff: input,
      status: false,
    },
    {
      key: 2,
      name: "RBP",
      flow_rate_diff: rbp,
      status: true,
    },
    {
      key: 3,
      name: "BHU",
      flow_rate_diff: bhu,
      status: true,
    },
    {
      key: 4,
      name: "School",
      flow_rate_diff: school,
      status: true,
    },
    {
      key: 5,
      name: "KST",
      flow_rate_diff: kst,
      status: true,
    },
    {
      key: 6,
      name: "Terrace",
      flow_rate_diff: terrace,
      status: true,
    },
    {
      key: 7,
      name: "Main Town",
      flow_rate_diff: maintown,
      status: true,
    },
    {
      key: 8,
      name: "Chabjey",
      flow_rate_diff: chabjey,
      status: true,
    },
  ];

  const column = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Flow Rate Difference",
      dataIndex: "flow_rate_diff",
      key: "flow_rate_diff",
    },

    {
      title: "Status",
      dataIndex: "status",
      render: (_, record) => (
        <>
          {record.flow_rate_diff > 0 ? (

<button type="button" class="py-2 px-4 flex justify-center items-center  bg-green-600 hover:bg-greed-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-12 md:w-24 h-12 rounded-lg ">
   No Loss
</button>

            // <div className="on bg-green-400 h-full">No Loss</div>
          ) : (
<button type="button" class="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-12 md:w-24 h-12 rounded-lg ">
   Loss
</button>         


)}
        </>
      ),
    },
  ];


  const alarmEventContent = (
    <Card
    // style={{
    //   borderRadius: 16,
    //   padding: 12,
    //   minHeight: 330,
    // }}

    class="py-4 md:mt-2 mt-10"
  >
    <p className="title">Water Loss</p>
    <Table bordered dataSource={Data} pagination={{ pageSize: 5 }} columns={column} />
  </Card>
  );

  return <ResponsiveDrawer box={alarmEventContent} />;
};

export default AlarmEvents;
