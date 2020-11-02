import React from 'react';
import { Link } from 'react-router-dom'

// import all backgroung image
import bg1 from '../img/DashboardBg/bg1.png'
import bg2 from '../img/DashboardBg/bg2.png'
import bg3 from '../img/DashboardBg/bg3.png'
import bg4 from '../img/DashboardBg/bg4.png'
import bg5 from '../img/DashboardBg/bg5.png'
import bg6 from '../img/DashboardBg/bg6.png'
import bg7 from '../img/DashboardBg/bg7.png'
import bg8 from '../img/DashboardBg/bg8.png'
import bg9 from '../img/DashboardBg/bg9.png'
import bg10 from '../img/DashboardBg/bg10.png'

const Profile = ({ userData }) => {

    const getRandomBackground = (() => {
        const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10];
        const selectedImage = images[Math.floor(Math.random() * images.length)];
        return selectedImage;
    })

    return (
        <div className="header pb-6 d-flex align-items-center " style={{ minHeight: 500, backgroundImage: `url(${getRandomBackground()})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}>
            {/* Mask */}
            <span className="mask bg-gradient-default opacity-8" />
            {/* Header container */}
            <div className="container-fluid d-flex align-items-center ">
                <div className="row ">
                    <div className="col-lg-4 col-md-2"></div>
                    <div className="col-lg-7 col-md-10">
                        <h1 className="display-2 text-white" style={{ fontFamily: 'sans-serif', fontWeight: 'normal' }}>Hello {userData.username}</h1>
                        <p className="text-white mt-0 mb-5 nav-link-text">This is your dashboard page. You can see the progress you've made with your
          work and manage your projects or assigned tasks</p>
                        <Link to="/ace-dev/articles" className="btn btn-neutral nav-link-text">Write Article</Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Profile;
