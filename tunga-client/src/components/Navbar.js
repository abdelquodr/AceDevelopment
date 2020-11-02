import React, { useState } from 'react';
import defaultImage from '../img/user1.png'
import { Link } from 'react-router-dom'
import ClassRoomModal from './ClassRoomModal'
import Search from './Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faVideo } from '@fortawesome/free-solid-svg-icons'
import logout from '../img/logout.png'

// import Notification from '../components/notification'


const Navbar = ({ search, userData }) => {

    const initialState = {
        checkLogout: false,
        checkSidebar: true
    }

    const [state, setstate] = useState(initialState);
    const [modal, setModal] = useState(false)

    // modal handles
    const handleModalOpen = () => setModal(true)
    const handleModalClose = () => setModal(false)


    const IsSearch = (search ? <Search /> : null)
    console.log(search)
    return (
        <div >
            {/* Topnav */}
            <nav className="navbar navbar-expand navbar-dark border-bottom py-2 border-bottom border-danger " style={{ backgroundColor: '#172b4d' }}>
                <div className="container-fluid pr-5">
                    <div className="collapse navbar-collapse mr-0 pr-0" id="navbarSupportedContent">
                        {/* Search form */}
                        {IsSearch}

                        {/* Navbar links */}

                        <ul className="navbar-nav align-items-center mr-sm-3 ml-md-auto ">
                            <li className="nav-item d-xl-none">
                                {/* Sidenav toggler */}
                                <div className="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
                                    <div className="sidenav-toggler-inner">
                                        <i className="sidenav-toggler-line" />
                                        <i className="sidenav-toggler-line" />
                                        <i className="sidenav-toggler-line" />
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <FontAwesomeIcon icon={faBell} ></FontAwesomeIcon>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <FontAwesomeIcon onClick={handleModalOpen} icon={faVideo} ></FontAwesomeIcon>
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav align-items-center  ml-auto ml-md-0 ">
                            <li className="nav-item dropdown">
                                <Link className="nav-link pr-0" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="media align-items-center">
                                        <span className="avatar avatar-sm rounded-circle">
                                            <img alt="user" name="checkLogout" src={userData.userImage || defaultImage} />
                                        </span>
                                        {state.checkLogout && <span className="nav-link-text bg-secondary border text-dark px-2 py-2" style={{ position: "absolute", top: "3rem", left: "-0.2rem", fontSize: "12px" }}><img alt="logout" src={logout} width="15rem" /> Logout</span>}
                                        <div className="media-body ml-2 d-none d-lg-block">
                                            <span className="mb-0 text-sm  font-weight-bold nav-link-text"> {userData.username} </span>
                                        </div>
                                    </div>
                                </Link>

                            </li>
                        </ul>

                        {modal && <ClassRoomModal show={modal} onHide={handleModalClose} />}
                    </div>
                </div>
            </nav>
        </div >

    );
}

export default Navbar;
