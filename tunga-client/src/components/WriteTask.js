import React from 'react';

const writeTask = () => {
    return (
        <form className="col-xl-12 col-lg-12 col-md-12 col-sm-12 pr-5">
            <h6 className="heading-small text-dark mb-4 nav-link-text text-center" style={{ fontSize: "1em" }}>Give Assignment</h6>
            <div className="pl-lg-4 ">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input type="text" id="input-first-name" className="form-control nav-link-text inp my-0 mx-0" style={{ outline: 'none', border: "none" }} placeholder="give assignment ..." />
                        </div>
                    </div>

                </div>
            </div>
            <hr className="my-2 py-2" />
            <div className="col-12 text-center ml-3 ">
                <button href="#!" className="btn btn-block font-weight-bold btn-lg btn-outline-dark nav-link-text ">Post Assignment</button>
            </div>
        </form>
    );
}

export default writeTask;
