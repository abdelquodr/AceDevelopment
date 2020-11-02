import React, { Component } from 'react';
import Navbar from '../components/Navbar'


class classRoom extends Component {

    render() {
        const userData = localStorage.getItem('userData')
        return (
            <div>
                <Navbar userData={userData} />
            </div>
        );
    }
}

export default classRoom;
