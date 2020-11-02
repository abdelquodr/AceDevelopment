import React, { Component } from 'react';
import SignForm from '../components/SignForm';
import background from '../img/cool-background.svg'


class SignUp extends Component {


    render() {
        return (
            <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
                <SignForm props={this.props} />
            </div>
        );
    }
}

export default SignUp;
