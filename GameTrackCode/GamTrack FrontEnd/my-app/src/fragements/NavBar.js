import React from 'react';

const NavigationBar = () => {
    const changeNavbarColor = (event) => {
        const navbar = document.querySelector('.navbar');
        navbar.classList.remove('navbar-green'); // Reset to default color
        navbar.offsetHeight; // Trigger reflow to apply transition
        navbar.classList.add('navbar-green'); // Apply green color
        event.preventDefault(); // Prevent the default behavior of the link
    };

    return (
        <>
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
                <title>Navigation Bar Example</title>
                <style>
                    {`
              .navbar {
                transition: background-color 0.3s ease; /* Smooth transition for background color change */
              }
              .navbar-green {
                background-color: #008000 !important; /* Green color */
              }
              .navbar-nav .nav-link {
                font-size: 1.2rem; /* Adjust the font size as needed */
              }
            `}
                </style>
            </head>
            <body>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">GameTrack</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={changeNavbarColor}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={changeNavbarColor}>Pairing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={changeNavbarColor}>Search</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={changeNavbarColor}>Comments</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={changeNavbarColor}>Posts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={changeNavbarColor}>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
            </body>
            </html>
        </>
    );
};

export default NavigationBar;
