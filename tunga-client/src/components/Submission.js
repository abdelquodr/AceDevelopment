import React from 'react';

const Submission = (props) => {
    return (

        <div className="col-xl-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div className="">
                    <div className="nav-link-text text-sm"> {props.username}</div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="">
                    <div className="d-inline nav-link-text text-sm">{props.email}</div>
                </div>
            </div>
            <div className="row justify-space-between">
                <div className="col-lg-8">
                    <div className="form-group mb-0">
                        <div className="nav-link-text align-item-center text-sm">{props.url}</div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3">
                    <label className="form-control-label nav-link-text" htmlFor="input-last-name">score</label>
                    <input type="number" id="input-last-name" className="form-control nav-link-text py-0 font-weight-bolder text-success" style={{ outline: 'none', border: 'none', textDecoration: 'underline' }} placeholder="0" />
                </div>
            </div>

            <div className="col-lg-12 ">
                <div className="form-group">
                    <label className="form-control-label nav-link-text" htmlFor="input-last-name" >suggestion on Improvement</label>
                    <textarea type="text" id="input-last-name" className="form-control nav-link-text" placeholder="your suggestion ..." />
                </div>
            </div>
            <div className="text-center py-0">
                <button className="btn btn-lg py-1 px-3 btn-outline-success nav-link-text"><i className="2x"></i> Mark Assignment</button>
            </div>
            <hr className="pt-0 pb-4" />

        </div>

    );
}

export default Submission;
