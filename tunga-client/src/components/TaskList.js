import React from 'react';
import Task from '../components/Task';

const TaskList = () => {
    return (
        <div className="col-xl-12 col-lg-12 col-md-12">
            <Task />
            <Task />
            <Task />
        </div >
    );
}

export default TaskList;
