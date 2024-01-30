import React from 'react';

const UserProfilePage = () => {
    return (
        <div className="container mt-5">
            {/* User Profile Header */}
            <div className="mb-4">
                {/* Page Title */}
                <h2 className="mb-3">User Profile</h2>

                {/* User Account Information */}
                <div className="d-flex align-items-center mb-3">
                    <div className="me-3">
                        {/* User Profile Image (replace with user-uploaded image) */}
                        <img className="rounded" src="user_profile_image.jpg" alt="user icon" width="80" height="80" />
                    </div>
                    <div>
                        {/* User Account Name (replace with actual username) */}
                        <h4>User123</h4>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    {/* Placeholder buttons (customize with actual functionality) */}
                    <button className="btn btn-success me-md-2">Add Post</button>
                    <button className="btn btn-danger me-md-2">Delete Post</button>
                    <button className="btn btn-primary">View Posts</button>
                </div>
            </div>
            {/* End User Profile Header */}

            {/* User Uploaded Comment Card 5 */}
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-2 bg-light">
                        <div className="text-center mt-3">
                            <img className="rounded" src="user5.jpg" alt="user icon" />
                            <p>ArtExplorer</p>
                            <small className="text-muted">January 15, 2024</small>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            <h5 className="card-title">Abstract Colors in Motion</h5>
                            <p className="card-text">Created a mesmerizing piece using vibrant colors in motion. Art is a journey!</p>
                            <div className="mt-3">
                                <h6>Comments:</h6>
                                <ul className="list-unstyled">
                                    <li>
                                        <strong>ColorEnthusiast:</strong> Wow! The colors are so captivating!
                                    </li>
                                    <li>
                                        <strong>ArtLover:</strong> How did you achieve the motion effect? It's fantastic!
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="commentInput5" className="form-label">Add a Comment:</label>
                                <textarea className="form-control" id="commentInput5" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Comments</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* End User Uploaded Comment Card 5 */}

            {/* User Uploaded Comment Card 6 */}
            {/* (similar structure, just change the data) */}

            {/* User Uploaded Comment Card 7 */}
            {/* (similar structure, just change the data) */}

        </div>
    );
};

export default UserProfilePage;
