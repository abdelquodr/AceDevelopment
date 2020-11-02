import React, { Component } from 'react';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faPhone, faUserCircle, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

class SignForm extends Component {

    state = {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        phone: '',
        policy: false
    }



    // handlers
    handleChange = (evt) => {
        const { name, value, type } = evt.target;
        type !== 'checkbox' ? this.setState(() => { return { [name]: value } }) : this.setState(() => { return { [name]: !this.state[name] } })
        console.log(this.state.lastname)
    }


    handleSubmit = (evt) => {
        evt.preventDefault()
        axios.post('http://localhost:4000/api/v1/user/register', {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone,
            policy: this.state.policy
        })
            .then((response) => {
                console.log(`i've registerd you with this detail ${JSON.stringify(response.data)}`);
                this.props.props.history.push('/ace-dev/dashboard')
            })
            .catch((err) => { console.log(this.props.props); alert(err) })
    }




    render() {
        return (
            <div className=" mt--0 pb-5 pt-5" width="100vw">
                {/* Table */}
                <div className="row justify-content-center">
                    <div className="col-xg-4 col-lg-3 pl-5 col-md-3 mt-5 col-sm-0">
                        <Link className="navbar-brand mt-5" to='/ace-dev'>
                            <h2 className="font-weight-bolder mt-5 pl-5" style={{ fontFamily: 'Righteous', paddingTop: '9rem', fontSize: '90px', transform: 'rotate(90deg)' }}> {"{ AceDev /}"}</h2>
                        </Link>
                    </div>
                    <div className="col-xl-8 col-lg-9 col-md-9 col-sm-12 ">
                        {/* <div className="row justify-content-center"> */}
                        <div className="col-xl-8 col-lg-8 col-md-9 col-sm-9">

                            <div className="card bg-secondary border-0">
                                <div className="card-body px-lg-5 py-lg-5">
                                    <div className="text-center text-muted mb-4">
                                        <small className="nav-link-text font-weight-bold" style={{ fontSize: "1.1rem", textTransform: 'uppercase' }}>sign up with credentials</small>
                                    </div>
                                    <form onSubmit={this.handleSubmit} >
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><FontAwesomeIcon icon={faUserCircle} size='sm' style={{ color: "#CCD6EB" }}></FontAwesomeIcon> </span>
                                                </div>
                                                <input onChange={this.handleChange} className="form-control nav-link-text" name="firstname" value={this.state.firstname} placeholder="Firstname" type="text" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><FontAwesomeIcon icon={faUserCircle} size='sm' style={{ color: "#CCD6EB" }}></FontAwesomeIcon> </span>
                                                </div>
                                                <input onChange={this.handleChange} className="form-control nav-link-text" name="lastname" value={this.state.lastname} placeholder="Lastname" type="text" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><FontAwesomeIcon icon={faUser} size='sm' style={{ color: "#CCD6EB" }}></FontAwesomeIcon> </span>
                                                </div>
                                                <input onChange={this.handleChange} className="form-control nav-link-text" name="username" value={this.state.username} placeholder="Username" type="text" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} size='sm' style={{ color: "#CCD6EB" }}></FontAwesomeIcon> </span>
                                                </div>
                                                <input onChange={this.handleChange} className="form-control nav-link-text" name="email" value={this.state.email} placeholder="Email" type="email" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><FontAwesomeIcon icon={faLock} size='sm' style={{ color: "#CCD6EB" }}></FontAwesomeIcon> </span>
                                                </div>
                                                <input onChange={this.handleChange} className="form-control nav-link-text" name="password" value={this.state.password} placeholder="Password" type="password" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><FontAwesomeIcon icon={faPhone} size='sm' style={{ color: "#CCD6EB" }}></FontAwesomeIcon> </span>
                                                </div>
                                                <input onChange={this.handleChange} className="form-control nav-link-text" name="phone" value={this.state.phone} placeholder="Phone" type="text" />
                                            </div>
                                        </div>
                                        <div className="text-muted font-italic nav-link-text"><small>password strength: <span className="text-success font-weight-700">strong</span></small></div>
                                        <div className="row my-4">
                                            <div className="col-12">
                                                <div className="custom-control custom-control-alternative custom-checkbox">
                                                    <input onChange={this.handleChange} className="custom-control-input" name="policy" id="customCheckRegister" type="checkbox" checked={this.state.policy} />
                                                    <label className="custom-control-label" htmlFor="customCheckRegister">
                                                        <span className="text-muted nav-link-text">I agree with the <a href="#!">Privacy Policy</a></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary mt-4 nav-link-text">Create account</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>


            </div >

        );
    }
}

export default SignForm;
