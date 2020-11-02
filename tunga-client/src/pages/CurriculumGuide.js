import React, { Component } from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Curriculum from '../components/curriculum';

class CurriculumGuide extends Component {

    state = {
        showSearch: false
    }

    render() {
        const userData = JSON.parse(localStorage.getItem('userData'))
        return (
            <div>
                <Sidebar />
                <div class="main-content" id="panel" >
                    <Navbar search={this.state.showSearch} userData={userData} />
                    <Curriculum />
                </div>
            </div>
        );
    }
}

export default CurriculumGuide;
