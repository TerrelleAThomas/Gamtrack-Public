// Assuming this is a React component file (e.g., UserProfile.jsx)

import React from 'react';

const UserProfile = () => {
    const changeNavbarColor = (event) => {
        document.querySelector('.navbar').style.backgroundColor = '#007bff';
    };

    const confirmDeleteAccount = () => {
        const confirmMessage = "Are you sure you want to delete your account?";
        if (window.confirm(confirmMessage)) {
            alert("Account deleted successfully!");
            window.location.href = 'signup.html';
        } else {
            alert("Account deletion canceled.");
        }
    };

    const redirectToUserProfile = (friendName) => {
        window.location.href = `userProfile.html?name=${friendName}`;
    };

    return (
        <div>
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#">Gamer Network</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={changeNavbarColor}>Pairing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={changeNavbarColor}>Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={changeNavbarColor}>Comments</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={changeNavbarColor}>Posts</a>
                        </li>
                        <li className="nav-item ml-2">
                            {/* Remove "Delete Account" link from navbar */}
                        </li>
                        <li className="nav-item ml-2">
                            <a className="nav-link" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Profile Header */}
            <header className="profile-header">
                <img src="https://placekitten.com/150/150" alt="Profile Avatar" className="profile-avatar" />
                <h2>User Name</h2>
                <p>Email: user@example.com</p>
            </header>

            {/* Main Content */}
            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col-md-8">
                        {/* User's Posts */}
                        <h3>Your Posts</h3>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Game Title 1</h5>
                                <p className="card-text">Your thoughts on the game...</p>
                                <a href="#" className="btn btn-primary">Edit</a>
                                <a href="#" className="btn btn-danger">Delete</a>
                            </div>
                        </div>

                        <div className="card mt-3">
                            <div className="card-body">
                                <h5 className="card-title">Game Title 2</h5>
                                <p className="card-text">Your thoughts on the game...</p>
                                <a href="#" className="btn btn-primary">Edit</a>
                                <a href="#" className="btn btn-danger">Delete</a>
                            </div>
                        </div>
                        {/* Add more posts as needed */}
                    </div>

                    {/* Sidebar */}
                    <div className="col-md-4">
                        <h3>Recommended Friends</h3>
                        <ul className="list-group">
                            <li className="list-group-item" onClick={() => redirectToUserProfile('Friend1')}>Friend 1</li>
                            <li className="list-group-item" onClick={() => redirectToUserProfile('Friend2')}>Friend 2</li>
                            <li className="list-group-item" onClick={() => redirectToUserProfile('Friend3')}>Friend 3</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Delete Account Button */}
            <div className="container">
                <div className="row justify-content-center">
                    <button className="btn btn-danger" onClick={confirmDeleteAccount}>Delete Account</button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
