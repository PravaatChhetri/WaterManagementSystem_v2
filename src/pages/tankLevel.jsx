import { Liquid } from "@ant-design/plots";

export default function TankLevel({ data }) {
  const total_capacity = 100;
  return (
    <div className="mb-3">
      <div>
        <div className="bg-[#294c96] p-4 text-center rounded-lg mb-3 h-[70px]">
          <p className="font-bold text-2xl text-white">Tank Water Level</p>
        </div>

        <div className="flex flex-col lg:flex-row shadow-lg rounded-lg w-full p-3 justify-evenly">
          {data.map((val, i) => {
            return (
              <div key={i} >
                <Liquid
                  {...{
                    percent: val.level * (1 / total_capacity),
                    outline: {
                      border: 3,
                      distance: 3,
                    },
                    width: 200,
                    height: 200,
                    wave: {
                      length: 225,
                    },
                  }}
                />
                <p className="text-lg text-center">{val.level_name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
