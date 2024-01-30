import React from 'react';

const UserSelectionPage = () => {
    const showWarning = () => {
        const confirmWork = window.confirm("Do you work for GamTrack?");
        if (confirmWork) {
            window.alert("Thank you for your confirmation!");
            // Additional actions for admin access or redirection can be added here
        } else {
            window.alert("Please proceed as a user.");
            // Additional actions for user access or redirection can be added here
        }
    };

    return (
        <div className="container">
            <h1 className="title">GamTrack</h1>
            <div className="selection-box">
                <h2>What is your use of the website today?</h2>
                <div>
                    <button className="btn btn-admin" onClick={showWarning}>Admin</button>
                    <button className="btn btn-user">User</button>
                </div>
            </div>
        </div>
    );
};

export default UserSelectionPage;
