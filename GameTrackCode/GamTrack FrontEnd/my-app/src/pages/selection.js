// Selection.js

import React from 'react';

function UserSelectionPage() {
    const confirmProceed = (destination) => {
        const confirmMessage = "Are you sure you want to proceed?";
        if (window.confirm(confirmMessage)) {
            // Redirect to the specified destination
            window.location.href = destination;
        } else {
            alert("Action canceled.");
            // Additional actions when the user cancels the action can be added here
        }
    };

    return (
        <div className="container">
            <h1 className="title">GamTrack</h1>
            <div className="selection-box">
                <h2>What is your use of the website today?</h2>
                <div>
                    <button className="btn btn-current-user" onClick={() => confirmProceed('current_user_page.html')}>
                        Current User
                    </button>
                    <button className="btn btn-new-user" onClick={() => confirmProceed('new_user_page.html')}>
                        New User
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserSelectionPage;
