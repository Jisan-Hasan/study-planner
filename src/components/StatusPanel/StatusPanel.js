import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./StatusPanel.css";

const StatusPanel = ({ studyTime }) => {
  const notify = () => toast("Congratulations! Task Completed.");
  let lsBreakTime = Number(localStorage.getItem("breakTime"));
  if (!lsBreakTime) {
    lsBreakTime = 0;
  }
  const [breakTime, setBreakTime] = useState(lsBreakTime);

  const handleBreakTime = (time) => {
    localStorage.setItem("breakTime", time);
    setBreakTime(time);
  };
  return (
    <div className="bg-slate-400 px-6 py-10">
      <div className="my-4 flex gap-2 align-middle">
        <div className="mt-2">
          <img
            className="w-10 h-10"
            src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
            alt="user-img"
          />
        </div>
        <div>
          <h4 className="text-xl">Md. Jisan Hasan</h4>
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="bg-orange-100 rounded p-3 flex justify-around">
        <div className="text-center">
          <h5 className="text-xl">027</h5>
          <p>ID</p>
        </div>
        <div className="text-center">
          <h5 className="text-xl">9 th</h5>
          <p>Trimester</p>
        </div>
        <div className="text-center">
          <h5 className="text-xl">22</h5>
          <p>Age</p>
        </div>
      </div>
      <h3 className="text-2xl my-4">Add a Break</h3>
      <div className="bg-orange-100 rounded p-5 flex justify-between">
        <button
          onClick={() => handleBreakTime(10)}
          className="btn btn-primary btn-sm rounded-full"
        >
          10M
        </button>
        <button
          onClick={() => handleBreakTime(15)}
          className="btn btn-primary btn-sm rounded-full"
        >
          15M
        </button>
        <button
          onClick={() => handleBreakTime(20)}
          className="btn btn-primary btn-sm rounded-full"
        >
          20M
        </button>
        <button
          onClick={() => handleBreakTime(25)}
          className="btn btn-primary btn-sm rounded-full"
        >
          25M
        </button>
        <button
          onClick={() => handleBreakTime(30)}
          className="btn btn-primary btn-sm rounded-full"
        >
          30M
        </button>
      </div>
      <div className="my-8">
        <h3 className="text-2xl mb-3">Study Details</h3>
        <div className="flex justify-between bg-orange-100 px-4 py-4 rounded mb-3">
          <p>Study Time</p>
          <p>{studyTime} Minutes</p>
        </div>

        <div className="flex justify-between bg-orange-100 px-4 py-4 rounded">
          <p>Break Time</p>
          <p>{breakTime} Minutes</p>
        </div>
      </div>
      <div className="text-center">
        <button onClick={notify} className="btn btn-wide btn-primary">
          Activity Completed
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default StatusPanel;
