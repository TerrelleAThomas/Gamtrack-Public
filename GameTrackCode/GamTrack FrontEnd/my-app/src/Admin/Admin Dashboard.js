import React, { useState } from 'react';

function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('userManagement');

    function showTab(tabId) {
        console.log(`Link clicked for tab: ${tabId}`);
        setActiveTab(tabId);
    }

    return (
        <div>
            <header className="bg-dark text-white text-center py-3">
                <h1>Admin Dashboard</h1>
            </header>

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <nav className="navbar navbar-expand-lg navbar-dark mx-auto text-center">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className={`nav-link ${activeTab === 'userManagement' ? 'active' : ''}`} href="#userManagement" onClick={() => showTab('userManagement')}>User Management</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${activeTab === 'contentModeration' ? 'active' : ''}`} href="#contentModeration" onClick={() => showTab('contentModeration')}>Search</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${activeTab === 'analytics' ? 'active' : ''}`} href="#analytics" onClick={() => showTab('analytics')}>Report</a>
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
        </div>
    );
}

export default AdminDashboard;
