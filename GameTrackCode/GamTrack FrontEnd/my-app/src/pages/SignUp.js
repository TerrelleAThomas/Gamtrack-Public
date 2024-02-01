import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { firstName, lastName, email, password } = formData;

        try {
            // Create a new user with Firebase Authentication
            await firebase.auth().createUserWithEmailAndPassword(email, password);

            // Update user profile with additional information
            const currentUser = firebase.auth().currentUser;
            await currentUser.updateProfile({
                displayName: `${firstName} ${lastName}`,
            });

            // Handle success, e.g., redirect the user or show a success message
            console.log('User registered successfully');
        } catch (error) {
            // Handle error, e.g., display an error message
            console.error('Error registering user', error.message);
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    return (
        <div className="container-fluid bg-image">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1 className="text-center mb-4">GamTrack</h1>
                    <p className="text-center mb-4">"<strong>What is better? To be born good or to overcome your evil nature through great effort?</strong>"</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
