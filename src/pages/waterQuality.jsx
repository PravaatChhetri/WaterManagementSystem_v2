export default function WaterQuality({ data }) {

  return (


    <div className="p-3 shadow-md mt-2 rounded-lg h-[160]" >
      <p className="text-xl font-bold text-center" >Water Quality</p><br />
      <div className="flex lg:flex-row flex-col justify-evenly">
        {data.map((val, i) => {
          return (
              <div key={i} className="flex flex-col p-3">
                <div className="">
                  <p className="text-center text-xl font-bold">{val.Quality_name}</p>
                </div>
                <div className="">
                  <p className="text-center text-xl">{i === 1 ? val.value / 100 : val.value}</p>
                </div>
              </div>
            
          );
        })}
      </div>
    </div>
  );
}
