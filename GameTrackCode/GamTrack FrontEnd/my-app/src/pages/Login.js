import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';
import 'firebase/auth';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = formData;

        try {
            // Sign in with Firebase Authentication
            await firebase.auth().signInWithEmailAndPassword(email, password);

            // Handle success, e.g., redirect the user or show a success message
            console.log('User logged in successfully');
        } catch (error) {
            // Handle error, e.g., display an error message
            console.error('Error logging in', error.message);
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
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1 className="text-center mb-4">GamTracker</h1>
                    <p className="quote">“Boss… you were right. It’s not about changing the world. It’s about doing our best to leave the world… the way it is. It’s about respecting the will of others and believing in your own.”</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                    </form>
                    <div className="space-after-login-form"></div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
