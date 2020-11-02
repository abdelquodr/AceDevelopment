import React from 'react';
import { Link } from 'react-router-dom'

const ArticleHeadings = () => {
    return (
        <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-xs-12 pr-2">

            <div className="card nav-link-text px-0 mx-0">
                <header className='card-header'>
                    <h4 className="class-header-title nav-link-text">header</h4>
                </header>
                <div className="card-body pt-2">
                    <span className="ni location_pin nav-link-text font-weight-bold" style={{ fontSize: "10px", color: "#fb6340" }} >march 10 2020</span>
                    <h3 className="h3 nav-link-text">Title </h3>
                    <p className="ni mr-2 nav-link-text"> body text goes here ...</p>
                    <div className="btn px-1 py-1 ">
                        <i className="fas fa-chevron-right " style={{ fontSize: "10px" }}></i>
                        <Link to='' className="text-sm font-weight-bold nav-link-text" style={{ color: '#172b4d' }}>learn more</Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ArticleHeadings;
