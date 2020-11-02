import React, { Component } from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import TaskList from '../components/TaskList';
import TaskSubmissionForm from '../components/TaskSubmissionForm';

class Task extends Component {

    state = {
        showSearch: true
    }

    render() {

        const userData = JSON.parse(localStorage.getItem('userData'))
        return (
            <div>
                <Sidebar />
                <div class="main-content" id="panel" >
                    <Navbar search={this.state.showSearch} userData={userData} />
                    <div className="row mt-5 pt-2">
                        <div className="col-xl-3 col-lg-0 col-md-0 col-sm-0"></div>
                        <div className="col-xl-5 col-lg-7 col-md-7 col-sm-7">
                            <TaskList />
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-5 col-sm-5">
                            <TaskSubmissionForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Task;
