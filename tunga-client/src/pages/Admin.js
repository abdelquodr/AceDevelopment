import React, { Component } from 'react';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import SubmissionList from '../components/SubmissionList';


class Admin extends Component {

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
                </div>
                <SubmissionList />
            </div>
        );
    }
}

export default Admin;
