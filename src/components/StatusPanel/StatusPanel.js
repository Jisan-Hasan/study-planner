import React from "react";
import "./StatusPanel.css";

const StatusPanel = () => {
  return (
    <div className="bg-slate-400 px-6 py-10">
      <h3 className="text-2xl my-4">Add a Break</h3>
      <div className="bg-orange-100 rounded p-5 flex justify-between">
        <button className="btn btn-primary btn-sm rounded-full" value={10}>
          10M
        </button>
        <button className="btn btn-primary btn-sm rounded-full" value={15}>
          15M
        </button>
        <button className="btn btn-primary btn-sm rounded-full" value={20}>
          20M
        </button>
        <button className="btn btn-primary btn-sm rounded-full" value={25}>
          25M
        </button>
        <button className="btn btn-primary btn-sm rounded-full" value={30}>
          30M
        </button>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl mb-3">Study Details</h3>
        <div className="flex justify-around bg-orange-100 px-3 py-5 rounded mb-3">
          <p>Study Time</p>
          <p><span>0</span> Minutes</p>
        </div>

        <div className="flex justify-around bg-orange-100 px-3 py-5 rounded">
          <p>Break Time</p>
          <p><span>0</span> Minutes</p>
        </div>
      </div>
    </div>
  );
};

export default StatusPanel;
