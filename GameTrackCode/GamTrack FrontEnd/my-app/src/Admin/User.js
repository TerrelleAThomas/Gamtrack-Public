import React from 'react';

const UserDatabase = () => {

    // Function to update the user status in Firebase
    const updateUserStatus = (userId, status) => {
        // Replace this with your Firebase logic to update user status
        // Example:
        // firebase.database().ref('users/' + userId).update({
        //     status: status
        // });
    };

    // Function to delete the user from Firebase
    const deleteUser = (userId) => {
        // Replace this with your Firebase logic to delete the user
        // Example:
        // firebase.database().ref('users/' + userId).remove();
    };

    // Event handler for updating user status
    const handleUpdateUserStatus = (userId, status) => {
        updateUserStatus(userId, status);
    };

    // Event handler for deleting user
    const handleDeleteUser = (userId) => {
        deleteUser(userId);
    };

    return (
        <div className="container">
            <h2>User Database</h2>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            {/* Display users table with creative layout */}
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th>ID</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Registration Date</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>JohnDoe</td>
                                        <td>john@example.com</td>
                                        <td>User</td>
                                        <td>2023-01-15</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td>
                                            <button className="btn btn-outline-success btn-sm" onClick={() => handleUpdateUserStatus(1, 'Active')}>Activate</button>
                                            <button className="btn btn-outline-info btn-sm" onClick={() => handleUpdateUserStatus(1, 'Deactive')}>Deactivate</button>
                                            <button className="btn btn-outline-danger btn-sm" onClick={() => handleDeleteUser(1)}>Delete</button>
                                        </td>
                                    </tr>
                                    {/* Additional users */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDatabase;
