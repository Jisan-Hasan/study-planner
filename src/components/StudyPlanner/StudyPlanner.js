import React from 'react';
import './StudyPlanner.css';
import AllTasks from '../AllTasks/AllTasks';
import StatusPanel from '../StatusPanel/StatusPanel';

const StudyPlanner = () => {
    return (
        <div className='studyplanner-container'>
            <AllTasks></AllTasks>
            <StatusPanel></StatusPanel>
        </div>
    );
};

export default StudyPlanner;