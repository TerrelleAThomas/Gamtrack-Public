import React from 'react';
import { NavLink } from 'react-router-dom';;
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export default function AdminDashboard () {
    // Inline style for the background image
    const backgroundStyle = {
        backgroundImage: `url('/Pictures/Admin.jpg')`,
        backgroundSize: 'cover', // Cover the entire page
        backgroundPosition: 'center', // Center the background image
        minHeight: '100vh', // Make sure it covers the whole viewport height
        color: '#fff', // Assuming you want white text color for contrast
    };

    return (
        <div style={backgroundStyle}>
            <header className="bg-dark text-white text-center py-3" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}> {/* Semi-transparent header */}
                <h1>Admin Dashboard</h1>
            </header>

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <nav className="navbar navbar-expand-lg navbar-dark mx-auto text-center">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/UserManagement" activeClassName="active">User Management</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Database" activeClassName="active">Search</NavLink> {/* Fixed path */}
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Reports" activeClassName="active">Report</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
