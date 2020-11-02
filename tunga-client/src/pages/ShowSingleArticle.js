import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar'
import SIngleArticle from '../components/SIngleArticle';


class ShowSingleArticle extends Component {

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
                    <SIngleArticle />
                </div>
            </div>
        );
    }
}

export default ShowSingleArticle;
