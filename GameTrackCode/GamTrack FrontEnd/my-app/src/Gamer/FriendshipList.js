import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';


export default function FriendshipPage () {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        // Initialize Firebase
        const firebaseConfig = {
            // Your Firebase configuration
        };
        firebase.initializeApp(firebaseConfig);

        // Reference to the friends collection
        const friendsRef = firebase.database().ref('friends');

        // Fetch friends data from Firebase
        friendsRef.once('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const friendList = Object.values(data);
                setFriends(friendList);
            }
        });

        // Cleanup Firebase connection
        return () => firebase.app().delete();
    }, []);

    // Function to delete a friend
    const deleteFriend = (username) => {
        // Implement logic to delete the friend with the specified username from Firebase
        console.log("Deleting friend: " + username);
    }

    // Function to accept a friend request
    const acceptRequest = (username) => {
        // Implement logic to accept the friend request from the specified username in Firebase
        console.log("Accepting friend request from: " + username);
    }

    // Function to reject a friend request
    const rejectRequest = (username) => {
        // Implement logic to reject the friend request from the specified username in Firebase
        console.log("Rejecting friend request from: " + username);
    }

    return (
        <div className="container">
            <h2 className="mb-4">Friendship Page</h2>
            <div className="row" id="friend-cards">
                {friends.map((friend, index) => (
                    <div key={index} className="col-md-6">
                        <div className="friend-card">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <h5>{friend.username}</h5>
                                    <p>Email: {friend.email}</p>
                                    <p>Location: {friend.location}</p>
                                </div>
                                <div className="col-4 text-right">
                                    <button className="btn btn-danger mr-2" onClick={() => deleteFriend(friend.username)}>Delete</button>
                                    <button className="btn btn-success mr-2" onClick={() => acceptRequest(friend.username)}>Accept</button>
                                    <button className="btn btn-secondary mr-2" onClick={() => rejectRequest(friend.username)}>Reject</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
