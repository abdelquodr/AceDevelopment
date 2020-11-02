import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile'
import Editprofile from '../components/Editprofile';


class Dashboard extends Component {
    // constructor(props) {
    //     super(props)
    // }

    state = {
        showSearch: false,
    }

    render() {
        // get data from localstorge
        const userData = JSON.parse(localStorage.getItem('userData'))
        console.log(userData)
        return (
            <div>
                <Sidebar />
                <div className="main-content" id="panel" >
                    <Navbar search={this.state.showSearch} userData={userData} />
                    <Profile userData={userData} />
                    <Editprofile props={this.props} userData={userData} />
                </div>


            </div>
        );
    }
}

export default Dashboard;
