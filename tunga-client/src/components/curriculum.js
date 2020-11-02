import React from 'react';

const curriculum = () => {
    return (
        <div className="row">
            <div className="col-xl-3"></div>
            <div className="col-xl-9 mt-5">
                <div className="h1 font-weight-bold text-center pt-5 pb-4 nav-link-text"> Welcome To AceDev Guide</div>
                <div className="">
                    <h2 className="text-center nav-link-text">Our Belief To Ace Your Development Career</h2>
                    <ul className="justify-content-center nav-link-text">
                        <li> Ability to go under the hood and unveil the core concept behind the chosen programming language </li>
                        <li> Ability to communicate through a problem with a lines of code (pair-programming, 'speaker') </li>
                        <li> Ability to Implement thought process in line of code (pair-programming, 'Implementer') </li>
                        <li> Ability to explain a ready-made code explicitly (learn from expert) </li>
                        <li> start building open-source project </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default curriculum;
