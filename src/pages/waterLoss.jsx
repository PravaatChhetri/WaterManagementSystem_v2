
export default function WaterLoss({ data }) {
  return (
    <div className="p-3  bg-[#294c96] shadow-md w-full rounded-xl" >
      <p className="text-xl font-bold pb-2 text-center text-white ">Water Loss</p>
      <div className="flex  justify-evenly px-3 py-[50px] mx-5  my-3 bg-white rounded-lg">
          <div>
            <p className="title">Flow Rate</p>
            <b>0</b>
          </div>
          <div >
            <p className="title">Total Flow</p>
            <b>0</b>
          </div>
        
      </div>
    </div>
  );
}
