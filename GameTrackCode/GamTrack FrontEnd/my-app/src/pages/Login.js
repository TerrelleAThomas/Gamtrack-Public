import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1 className="text-center mb-4">GamTracker</h1>
                    <p className="quote">“Boss… you were right. It’s not about changing the world. It’s about doing our best to leave the world… the way it is. It’s about respecting the will of others and believing in your own.”</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                    </form>
                    <div className="space-after-login-form"></div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;