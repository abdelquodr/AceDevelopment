import React from 'react';
import Submission from './Submission';
import WriteTask from '../components/WriteTask';

const SubmissionList = () => {

    // const initialState = [];
    // const [state, setstate] = useState(initialState);


    // const submissionList = true && submissionList.map((el, i) => <Submission key={i} username={el.username} emial={el.email} url={el.url} />)

    return (
        <div>
            <div className="card-header">
                <h3 className="mb-0 nav-link-text text-center">User Assignment Submission </h3>
                <div className="row my-3">
                    <div className="col-xl-3 col-lg-3 col-md-0 col-sm-0"></div>
                    <div className="col-xl-5 col-lg-5 col-md-7 col-sm-7">
                        <Submission />
                        <Submission />
                        <Submission />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-5">
                        <WriteTask />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubmissionList;
