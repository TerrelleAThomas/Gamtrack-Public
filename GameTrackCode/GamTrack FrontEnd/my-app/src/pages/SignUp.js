import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUpForm = () => {
    return (
        <div className="container-fluid bg-image">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1 className="text-center mb-4">GamTrack</h1>
                    <p className="text-center mb-4">"<strong>What is better? To be born good or to overcome your evil nature through great effort?</strong>"</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <input type="date" className="form-control" id="dateOfBirth" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gameAccountId">Game Account ID</label>
                            <input type="text" className="form-control" id="gameAccountId" placeholder="Enter your game account ID" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gameType">Game Type</label>
                            <select className="form-control" id="gameType">
                                <option>Select a game type</option>
                                <option>Action</option>
                                <option>Sports</option>
                                <option>Roleplay</option>
                                {/* Add more game type options as needed */}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="gameConsoles">Game Consoles</label>
                            <select className="form-control" id="gameConsoles">
                                <option>Select a console</option>
                                <option>Playstation</option>
                                <option>XBOX</option>
                                <option>Nintendo</option>
                                <option>WII</option>
                                <option>Other</option>
                                {/* Add more console options as needed */}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="gameNickname">Game Nickname</label>
                            <input type="text" className="form-control" id="gameNickname" placeholder="Enter your game nickname" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    </form>
                    {/* ... (rest of the code remains unchanged) */}
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;