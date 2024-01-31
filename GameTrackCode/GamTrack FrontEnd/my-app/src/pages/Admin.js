import React from 'react';

const AdminDashboard = () => {
    // Example: You can perform actions when a link is clicked
    const showTab = (tabId) => {
        // Example: You can perform actions when a link is clicked
        console.log(`Link clicked for tab: ${tabId}`);
    };

    return (
        <div>
            <header className="bg-dark text-white text-center py-3">
                <h1>Admin Dashboard</h1>
            </header>

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <nav className="navbar navbar-expand-lg navbar-dark mx-auto text-center" style={{ backgroundColor: '#800080', padding: '20px' }}>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" style={{ backgroundColor: '#fff' }}></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#userManagement" onClick={(event) => { event.preventDefault(); showTab('userManagement'); }}>User Management</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contentModeration" onClick={(event) => { event.preventDefault(); showTab('contentModeration'); }}>Content Moderation</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#analytics" onClick={(event) => { event.preventDefault(); showTab('analytics'); }}>Analytics</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#settings" onClick={(event) => { event.preventDefault(); showTab('settings'); }}>Settings</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#reports" onClick={(event) => { event.preventDefault(); showTab('reports'); }}>Reports</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="row mt-3">
                    <div className="col-md-12">
                        {/* Content sections can be added here if needed */}
                    </div>
                </div>
            </div>

            {/* Bootstrap JS and jQuery */}
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        </div>
    );
};

export default AdminDashboard;
