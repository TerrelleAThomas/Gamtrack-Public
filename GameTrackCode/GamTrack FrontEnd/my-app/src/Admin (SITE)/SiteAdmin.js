import React from 'react';

const AdminDashboard = () => {
    const showTab = (tabId) => {
        // Example: You can perform actions when a link is clicked
        console.log(`Link clicked for tab: ${tabId}`);
    };

    return (
        <>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Admin Dashboard</title>
                {/* Bootstrap CSS */}
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                />
                <style>
                    {`
            body {
              background-image: url('Admin.jpg');
              background-size: cover;
              background-position: center;
              height: 100vh;
              margin: 0;
              padding: 0;
            }

            .navbar {
              background-color: #800080;
              padding: 20px;
            }

            .navbar-nav .nav-link {
              color: #fff;
              font-size: 1rem;
            }

            .navbar-toggler-icon {
              background-color: #fff;
            }
          `}
                </style>
            </head>

            <body className="d-flex align-items-center justify-content-center">
            <header className="bg-dark text-white text-center py-3">
                <h1>Admin Dashboard</h1>
            </header>

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <nav className="navbar navbar-expand-lg navbar-dark mx-auto text-center">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#userManagement" onClick={(e) => { e.preventDefault(); showTab('userManagement'); }}>User Management</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contentModeration" onClick={(e) => { e.preventDefault(); showTab('contentModeration'); }}>Search</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#analytics" onClick={(e) => { e.preventDefault(); showTab('analytics'); }}>Report</a>
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
            </body>
        </>
    );
};

export default AdminDashboard;
