import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

function GameTrack() {
    useEffect(() => {
        // Your Firebase project configuration
        const firebaseConfig = {
            apiKey: "YOUR_API_KEY",
            authDomain: "YOUR_AUTH_DOMAIN",
            databaseURL: "YOUR_DATABASE_URL",
            projectId: "YOUR_PROJECT_ID",
            storageBucket: "YOUR_STORAGE_BUCKET",
            messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
            appId: "YOUR_APP_ID"
        };

        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        // Reference to the Firebase database
        const database = firebase.database();

        // Function to fetch announcements
        const fetchAnnouncements = () => {
            const announcementContainer = document.getElementById('announcementContainer');

            // Get a reference to the "announcements" node in the database
            const announcementsRef = database.ref('announcements');

            // Listen for changes to the "announcements" node
            announcementsRef.on('child_added', (data) => {
                const announcement = data.val();
                // Create a card for each announcement
                const announcementCard = document.createElement('div');
                announcementCard.className = 'card mb-3 announcement';
                announcementCard.innerHTML = `
          <div className="card-body">
            <h5 className="card-title">${announcement.title}</h5>
            <p className="card-text">${announcement.content}</p>
          </div>
        `;
                announcementContainer.appendChild(announcementCard);
            });
        };

        // Call the function to fetch announcements when the component mounts
        fetchAnnouncements();
    }, []);

    // Function to send a message
    const sendMessage = (event) => {
        event.preventDefault();
        const messageInput = document.getElementById('messageInput');
        const message = messageInput.value.trim();
        if (message !== '') {
            const chatContainer = document.getElementById('chatContainer');
            // Create a message element
            const messageElement = document.createElement('div');
            messageElement.className = 'message';
            messageElement.innerHTML = `<p><strong>You:</strong> ${message}</p>`;
            // Append the message to the chat container
            chatContainer.appendChild(messageElement);
            // Scroll to the bottom of the chat container
            chatContainer.scrollTop = chatContainer.scrollHeight;
            // Clear the message input
            messageInput.value = '';
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">GameTrack</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <span className="navbar-text mr-3">Welcome, User123</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8">
                        <h2 className="mb-4">Message Chat</h2>
                        <div className="chat-container" id="chatContainer">
                            {/* Message container - messages will be dynamically added here */}
                            <div className="message">
                                <p><strong>User1:</strong> Hi there!</p>
                                <p><strong>User2:</strong> Hello!</p>
                                {/* Add more messages here */}
                            </div>
                        </div>
                        {/* Message input form */}
                        <form id="messageForm" className="mt-3" onSubmit={sendMessage}>
                            <div className="input-group">
                                <input type="text" className="form-control" id="messageInput" placeholder="Type your message..." />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-primary">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4">
                        <h2 className="mb-4">Announcements</h2>
                        <div id="announcementContainer">
                            {/* Announcements will be dynamically added here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameTrack;
