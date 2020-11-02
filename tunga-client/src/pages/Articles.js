import React, { Component } from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import ArticleHeadingList from '../components/ArticleHeadingList'
import ArticleCardList from '../components/ArticleCardList';


class Articles extends Component {

    state = {
        showSearch: true
    }

    render() {
        const userData = JSON.parse(localStorage.getItem('userData'))

        return (
            <div>
                <Sidebar />
                <div className="main-content" id="panel" >
                    <Navbar search={this.state.showSearch} userData={userData} />
                    <ArticleHeadingList />
                    <ArticleCardList />

                </div>
            </div>
        );
    }
}

export default Articles;
