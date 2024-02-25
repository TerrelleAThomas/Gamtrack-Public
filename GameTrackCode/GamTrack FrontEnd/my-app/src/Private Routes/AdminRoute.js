import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AdminPrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue; // Implement this

        // Not logged in, redirect to login page
        if (!currentUser) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
        }

        // Check if the current user is an Admin
        if (currentUser.role !== 'Admin') {
            // Not an Admin, redirect to home page or a "not authorized" page
            return <Redirect to={{ pathname: '/' }} />;
        }

        // Authorized as Admin, so render the component
        return <Component {...props} />;
    }} />
);

export default AdminPrivateRoute;
