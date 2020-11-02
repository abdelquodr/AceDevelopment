import React, { useRef, useState } from 'react';
import axios from 'axios'
import tunga from '../img/DashboardBg/tunga.png'

const Editprofile = ({ props, userData }) => {

    const initialState = {
        email: '',
        password: '',
    }
    const [state, setstate] = useState(initialState);
    const [photo, setPhoto] = useState(null);

    const photoInput = useRef()

    // ******* handlers

    // input field handler
    const handleChange = (event) => {
        const { name, value } = event.target;
        setstate(() => { return { ...state, [name]: value } })
    }

    // photo handler
    const updatePhoto = () => {

        const file = photoInput.current.files && photoInput.current.files[0];
        console.log(file)

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPhoto(reader.result)
            reader.readAsDataURL(file)

        }
        console.log(file)
        setPhoto({ photo: file })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:4000/api/v1/user/login', {
            email: state.email,
            password: state.password
            // userImage: photo // { name: photo.name, size: photo.size, type: photo.type, lastModified: photo.lastModified }
        },
            {
                headers: {
                    'content-type': 'application/json'
                }
            }
        )
            .then((response) => {
                const result = JSON.stringify(response.data)
                axios.create({
                    headers: {
                        Authorization: result.token
                    }
                });
                localStorage.setItem('userData', JSON.stringify({
                    ...response.data,
                    userImage: photo
                }))
                console.log(props.history.push('/ace-dev/articles'))
                console.log(result, photo)

            })
            .catch((error) => {
                console.log(error)
            })
    }



    return (
        <div>
            <div className="container-fluid mt--6">
                <div className="row d-flex justify-content-between">
                    <div className="col-xl-3 order-xl-2">
                        <div className="card card-profile">
                            <img src={tunga} alt="company" className="card-img-top" />
                            <div className="row justify-content-center">
                                <div className="col-lg-3 order-lg-2">
                                    <div className="card-profile-image" style={{ paddingTop: '2.2em' }}>
                                        <span href="#">
                                            <img src={userData.userImage || tunga} alt="user-img" className="" style={{ width: '7rem', height: '7rem', borderRadius: '50%' }} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                                <div className="d-flex justify-content-between">
                                    {/* <a href="#" className="btn btn-sm btn-info  mr-4 ">Connect</a>
                                    <a href="#" className="btn btn-sm btn-default float-right">Message</a> */}
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div className="row">
                                    <div className="col">
                                        <div className="card-profile-stats d-flex justify-content-center">
                                            <div>
                                                <span className="heading  nav-link-text">22</span>
                                                <span className="description nav-link-text text-dark"> Test </span>
                                            </div>
                                            <div>
                                                <span className="heading nav-link-text">10</span>
                                                <span className="description nav-link-text text-dark">article</span>
                                            </div>
                                            <div>
                                                <span className="heading">89</span>
                                                <span className="description nav-link-text text-dark"> Scores </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h5 className="h3 nav-link-text">
                                        {userData.firstname + ' ' + userData.lastname}
                                    </h5>
                                    <div className="h5 font-weight-300">
                                        <span className="ni location_pin mr-2 nav-link-text" > local government area, Contry </span>
                                    </div>
                                    <div className="h5 mt-4">
                                        <span className="ni h4 business_briefcase-24 mr-2" > Your Profession </span>
                                    </div>
                                    <div>
                                        <span className="ni location_pin mr-2 nav-link-text" > latest score <span className="pl-3 text-danger"> 7</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-6 order-xl-1">
                        <div className="card">
                            <div className="card-header">
                                <div className="row align-items-center">
                                    <div className="col-8">
                                        <h3 className="mb-0 nav-link-text">Login Here </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit} method="POST" >
                                    <h6 className="heading-small text-muted mb-4 nav-link-text">Registration Information</h6>
                                    <div className="pl-lg-4 mb-2">

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="form-control-label nav-link-text" htmlFor="input-email">Email address</label>
                                                    <input onChange={handleChange} type="email" id="input-email" value={state.email} name='email' className="form-control nav-link-text" placeholder='email' />
                                                </div>
                                                {state.email}
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="form-control-label nav-link-text" htmlFor="input-username">Password</label>
                                                    <input onChange={handleChange} type="password" value={state.password} name='password' className="form-control nav-link-text" placeholder='password' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label className="form-control-label nav-link-text" htmlFor="input-username">User Image</label>
                                                    <input onChange={updatePhoto} ref={photoInput} type="file" className="form-control nav-link-text" placeholder='image' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="col-12 text-center">
                                        <button className="btn btn-lg btn-sm btn-outline-primary nav-link-text">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2"></div>
                </div>
            </div>
        </div>

    );
}

export default Editprofile;
