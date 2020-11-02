import React from 'react';
import user from '../img/user1.png'
import { Link } from 'react-router-dom'

const ArticleCard = (props) => {

    return (
        <div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                {/* <div className="mr-2"></div> */}
                <div className="card ml-3 ">
                    <header className='card-header pt-0'>
                        <div className="align-middle" style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
                            <span className="avatar avatar-sm rounded-circle mt-3 align-middel">
                                <img alt="user" src={user} />
                            </span>
                            <h5 className="nav-link-text d-inline-block mr-5 font-weight-bold pt-0 align-item-center mt-0 pl-2 pb-0 mb-0 align-middle" style={{ fontSize: "16px" }}> username <span className='pl-3 text-danger' style={{ fontSize: '10px' }}>May 16 1993</span></h5>
                            <p className="text-sm nav-link-text mt-0 pt-0 pl-1">Profession</p>
                            <img src={user} alt="user" width="100%" />
                        </div>
                    </header>
                    <div className="card-body">
                        <h3 className="h3 nav-link-text"> {props.articleHeader} </h3>
                        <p className="ni mr-2 nav-link-text"> {props.articleBody} </p>
                        <div className="btn px-1 py-1 ">
                            <i className="fas fa-chevron-right " style={{ fontSize: "10px" }}></i>
                            <Link to='ace-dev/article/:id' className="text-sm font-weight-bold nav-link-text" style={{ color: '#172b4d' }}>learn more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ArticleCard;
