import React from "react";
import "./SingleTask.css";

const SingleTask = ({ task, handleAddToList }) => {
  const { img, name, time } = task;
  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 w-full h-full">
          <img src={img} alt={name} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Time: {time} Min.</p>
          <div className="card-actions">
            <button onClick={() => handleAddToList(time)} className="btn btn-primary px-10">Add To List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
