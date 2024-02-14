import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const UserProfilePage = () => {
    // Function to handle flagging a post or comment
    const handleFlag = (type, id) => {
        // Reference to the Firebase database
        const db = firebase.database();

        // Get a reference to the node where flags are stored (e.g., 'flags/posts' or 'flags/comments')
        const flagsRef = db.ref(`flags/${type}s/${id}`);

        // Check if the post or comment is already flagged by the current user
        flagsRef.once('value', (snapshot) => {
            const flagData = snapshot.val();

            if (flagData) {
                // If already flagged, notify the user
                console.log(`You have already flagged this ${type}.`);
            } else {
                // If not flagged, add a flag to the database
                flagsRef.set({
                    userId: firebase.auth().currentUser.uid, // Assuming you're using Firebase Authentication
                    timestamp: firebase.database.ServerValue.TIMESTAMP // Add timestamp
                })
                    .then(() => {
                        console.log(`Successfully flagged ${type} with ID: ${id}`);
                        // You can also provide feedback to the user (e.g., show a notification)
                    })
                    .catch((error) => {
                        console.error('Error flagging:', error);
                        // Handle errors (e.g., display an error message to the user)
                    });
            }
        });
    };

    return (
        <div className="container mt-5">
            {/* User Profile Header */}
            {/* User Profile Header content (unchanged) */}

            {/* User Uploaded Comment Card 5 */}
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-2 bg-light">
                        {/* User Profile Image and Information (unchanged) */}
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            {/* Card Title and Text (unchanged) */}
                            {/* Comments section (unchanged) */}
                            {/* Comment Input (unchanged) */}
                            {/* Flag Button */}
                            <button
                                type="button"
                                className="btn btn-outline-danger me-2"
                                onClick={() => handleFlag('post', 5)} // Example: Flagging a post with ID 5
                            >
                                Flag
                            </button>
                            <button type="submit" className="btn btn-primary">Comments</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* End User Uploaded Comment Card 5 */}

            {/* User Uploaded Comment Card 6 */}
            {/* (similar structure, just change the data and IDs in onClick) */}

            {/* User Uploaded Comment Card 7 */}
            {/* (similar structure, just change the data and IDs in onClick) */}

        </div>
    );
};

export default UserProfilePage;
