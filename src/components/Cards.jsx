import React from "react";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white transition duration-75 ease-in-out" id="cards">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>

          <h2 className="text-2xl font-bold text-center py-8">
            Secure Data Access
          </h2>
          <p className="text-center text-4xl font-bold"></p>
          <div className="text-center text-[#8c8c8c] font-lg">
            <p className="py-2 mx-8 mt-8">
              {" "}
              Data can be securely accessed by the community living in the
              locality
            </p>
           
          </div>
          
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
         
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-20 mx-auto mt--[3rem] bg-transparent"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>

          <h2 className="text-2xl font-bold text-center py-8">View Events</h2>
          {/* <p className="text-center text-4xl font-bold"></p> */}
          <div className="text-center mb-20 font-medium">
            <p className="py-2 mx-8 mt-8">Gives you exclusive access to the Events that have occurred in water management system</p>

          </div>
          
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <h2 className="text-2xl font-bold text-center py-8">Alarms and Events</h2>
          <div className="text-center text-[#8c8c8c] mb-5 font-lg">
            <p className="py-2 mx-8 mt-8">Stay Updated with the issues that are occurring in water management system</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
