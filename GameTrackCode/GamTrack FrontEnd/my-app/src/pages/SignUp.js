import React from 'react';

const SignupForm = () => {
    return (
        <div className="container-fluid bg-image">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1 className="text-center mb-4">GamTrack</h1>
                    <p className="text-center mb-4">"<strong>What is better? To be born good or to overcome your evil nature through great effort?</strong>"</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
