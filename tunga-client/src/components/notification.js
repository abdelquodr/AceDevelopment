import React from 'react';
import { Link } from 'react-router-dom'
import user from '../img/user1.png'

const notification = () => {
    return (
        <div>
            {/* Navbar links */}
            <ul className="navbar-nav align-items-center  ml-md-auto ">
                <Link className="nav-item d-xl-none">
                    {/* Sidenav toggler */}
                    <div className="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
                        <div className="sidenav-toggler-inner">
                            <i className="sidenav-toggler-line" />
                            <i className="sidenav-toggler-line" />
                            <i className="sidenav-toggler-line" />
                        </div>
                    </div>
                </Link>

                <Link className="nav-item dropdown">
                    <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="ni ni-bell-55" />
                    </a>
                </Link>

            </ul>
            <ul className="navbar-nav align-items-center  ml-auto ml-md-0 ">
                <Link className="nav-item dropdown">
                    <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="media align-items-center">
                            <span className="avatar avatar-sm rounded-circle">
                                <img alt="user" src={user} />
                            </span>
                            <div className="media-body  ml-2  d-none d-lg-block">
                                <span className="mb-0 text-sm  font-weight-bold">John Snow</span>
                            </div>
                        </div>
                    </a>

                </Link>
            </ul>
        </div>

    );
}

export default notification;
