import React from 'react';

const TaskSubmissionForm = () => {
    return (
        <form className="col-xl-12 col-lg-12 col-md-12 col-sm-12 pr-5">
            <h6 className="heading-small text-muted mb-4 nav-link-text text-center">Submit your Assignment Here</h6>
            <div className="pl-lg-4 ">
                <div className="row text-center">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="form-control-label nav-link-text" htmlFor="input-username">Username</label>
                            <input type="text" id="input-username" className="form-control nav-link-text" placeholder="Username" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="form-control-label nav-link-text" htmlFor="input-email">Email address</label>
                            <input type="email" id="input-email" className="form-control nav-link-text" placeholder="jesse@example.com" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label className="form-control-label nav-link-text" htmlFor="input-first-name">URL</label>
                            <input type="text" id="input-first-name" className="form-control nav-link-text inp my-0 mx-0" style={{ outline: 'none', border: "none" }} placeholder="url" />
                        </div>
                    </div>

                </div>
            </div>
            <hr className="my-2 py-2" />
            <div className="col-12 text-center ml-3 ">
                <button href="#!" className="btn btn-block font-weight-bold btn-lg btn-outline-dark nav-link-text ">Submit Your Assignment</button>
            </div>
        </form>
    );
}

export default TaskSubmissionForm;
