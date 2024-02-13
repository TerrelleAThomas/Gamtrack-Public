import React from 'react';

const UserManagement = () => {

    const fetchUserData = () => {
        // Replace this with your Firebase logic to fetch user data
        const userName = "John Doe";
        const userDetails = "User details fetched from Firebase will appear here...";
        const registrationDate = "January 1, 2022";

        // Update the user card with fetched data
        document.getElementById("user-name").textContent = userName;
        document.getElementById("user-details").textContent = userDetails;
        document.getElementById("registration-date").textContent = "Registration Date: " + registrationDate;
    };

    const deleteUser = () => {
        // Logic to delete the user
        // Implement this based on your Firebase setup
        alert("Deleting user...");
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="user-list">
                        <h2 className="text-center mb-4">User Management</h2>

                        {/* Search Bar */}
                        <div className="input-group mb-3 search-bar">
                            <input type="text" className="form-control" placeholder="Search for users..." aria-label="Search" aria-describedby="search-btn" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button" id="search-btn" onClick={fetchUserData}>Search</button>
                            </div>
                        </div>

                        {/* User Card */}
                        <div className="user-card" id="user-card">
                            <h5 id="user-name">User Name</h5>
                            <p id="user-details">User details go here...</p>
                            <small id="registration-date">Registration Date: January 1, 2022</small>
                            <div className="text-right">
                                <button className="btn btn-danger" onClick={deleteUser}>Delete</button>
                            </div>
                        </div>
                        {/* End of User Card */}
                    </div>

                    <a href="admin-dashboard.html" className="btn btn-secondary btn-block">Back to Admin Dashboard</a>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;
