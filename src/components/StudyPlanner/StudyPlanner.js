import React, { useState } from 'react';
import './StudyPlanner.css';
import AllTasks from '../AllTasks/AllTasks';
import StatusPanel from '../StatusPanel/StatusPanel';

const StudyPlanner = () => {
    const [studyTime, setStudyTime] = useState(0);
    const handleAddToList = time => setStudyTime(time + studyTime);
    return (
        <div className='studyplanner-container'>
            <AllTasks handleAddToList={handleAddToList}></AllTasks>
            <StatusPanel studyTime={studyTime}></StatusPanel>
        </div>
    );
};

export default StudyPlanner;