import React from 'react';
import './SingleTask.css';

const SingleTask = ({task}) => {
    return (
        <div>
            <h1>{task.name}</h1>
        </div>
    );
};

export default SingleTask;