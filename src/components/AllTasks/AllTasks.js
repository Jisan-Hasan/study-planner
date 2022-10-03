import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import SingleTask from "../SingleTask/SingleTask";
import "./AllTasks.css";

const AllTasks = ({ handleAddToList }) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch(`fakedata.json`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  return (
    <div className="py-14 px-20">
      <div className="flex gap-2 text-3xl text-bold text-primary mb-5">
        <FontAwesomeIcon icon={faBook} />
        <h1>StudyPlanner</h1>
      </div>
      <p className="mb-3">Select your Study Topic Now.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 w-full h-full">
        {tasks.map((task) => (
          <SingleTask
            task={task}
            key={task.id}
            handleAddToList={handleAddToList}
          ></SingleTask>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
