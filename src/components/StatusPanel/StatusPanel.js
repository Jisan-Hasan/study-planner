import React, { useState } from "react";
import "./StatusPanel.css";

const StatusPanel = ({studyTime}) => {
  const [breakTime, setBreakTime] = useState(0);

  
  return (
    <div className="bg-slate-400 px-6 py-10">
      <h3 className="text-2xl my-4">Add a Break</h3>
      <div className="bg-orange-100 rounded p-5 flex justify-between">
        <button onClick={() => setBreakTime(10)} className="btn btn-primary btn-sm rounded-full">
          10M
        </button>
        <button onClick={() => setBreakTime(15)} className="btn btn-primary btn-sm rounded-full">
          15M
        </button>
        <button onClick={() => setBreakTime(20)} className="btn btn-primary btn-sm rounded-full">
          20M
        </button>
        <button onClick={() => setBreakTime(25)} className="btn btn-primary btn-sm rounded-full">
          25M
        </button>
        <button onClick={() => setBreakTime(30)} className="btn btn-primary btn-sm rounded-full">
          30M
        </button>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl mb-3">Study Details</h3>
        <div className="flex justify-around bg-orange-100 px-3 py-5 rounded mb-3">
          <p>Study Time</p>
          <p>{studyTime} Minutes</p>
        </div>

        <div className="flex justify-around bg-orange-100 px-3 py-5 rounded">
          <p>Break Time</p>
          <p>{breakTime} Minutes</p>
        </div>
      </div>
    </div>
  );
};

export default StatusPanel;
