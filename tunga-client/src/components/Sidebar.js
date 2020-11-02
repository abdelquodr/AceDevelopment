import React from 'react';
import { Link } from 'react-router-dom';
import admin from '../img/icons8-admin-settings-male-64.png'
import dashboard from '../img/icons8-dashboard-64.png'
import article from '../img/icons8-hot-article-80.png'
import settings from '../img/icons8-settings-64.png'
import task from '../img/icons8-system-task-64.png'
import curriculum from '../img/icons8-resume-template-80.png'
import '../css/index.css'

const Sidebar = () => {
    return (
        <div>
            {/* &lt; !--Sidenav -- &gt; */}
            <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main" >
                <div className="scrollbar-inner" style={{ color: '#172b4d' }}>
                    {/* Brand */}
                    <div className="sidenav-header  align-items-center mb-5">
                        <Link className="navbar-brand" to="/ace-dev/dashboard">
                            <h2 className="font-weight-bolder pt-4" style={{ fontFamily: 'Righteous', fontSize: '30px' }}> {"{ AceDev /}"}</h2>
                        </Link>
                    </div>
                    <div className="navbar-inner" >
                        {/* Collapse */}
                        <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                            {/* Nav items */}
                            <ul className="navbar-nav" >
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ace-dev/dashboard" >
                                        <img src={dashboard} alt="dashboard" className="ml-4" style={{ width: "1.5rem" }} />
                                        <span className="nav-link-text pl-3 pt-2 font-weight-bold " style={{ color: '#172b4d' }} >Dashboard</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ace-dev/articles">
                                        <img src={article} alt="article" className="ml-4" style={{ width: "1.6rem" }} />
                                        <span className="nav-link-text pl-3 pt-2 font-weight-bold" style={{ color: '#172b4d' }}>Articles</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ace-dev/task">
                                        <img src={task} alt="task" className="ml-4" style={{ width: "1.4rem" }} />
                                        <span className="nav-link-text pl-3 pt-2 font-weight-bold" style={{ color: '#172b4d' }}>Task</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ace-dev/admin">
                                        <img src={admin} alt="admin" className="ml-4" style={{ width: "1.4rem" }} />
                                        <span className="nav-link-text pl-3 pt-2 font-weight-bold" style={{ color: '#172b4d' }}>Admin</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ace-dev/settings">
                                        <img src={settings} alt="settings" className="ml-4" style={{ width: "1.4rem" }} />
                                        <span className="nav-link-text pl-3 pt-2 font-weight-bold " style={{ color: '#172b4d' }}>Settings</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ace-dev/curriculum">
                                        <img src={curriculum} alt="curriculum" className="ml-4" style={{ width: "1.4rem" }} />
                                        <span className="nav-link-text pl-3 pt-2 font-weight-bold" style={{ color: '#172b4d' }}>Curriculum</span>
                                    </Link>
                                </li>

                            </ul>
                            {/* Divider */}
                            <hr className="my-3" />
                            {/* Heading */}
                            <h6 className="navbar-heading p-0 text-muted text-center">
                                <span className="docs-normal font-weight-lighter" style={{ color: '#172b4d' }}>Documentation</span>
                            </h6>

                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Sidebar;
