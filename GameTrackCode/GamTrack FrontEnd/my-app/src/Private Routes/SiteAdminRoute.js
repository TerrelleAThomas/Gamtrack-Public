import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const SiteAdminRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue; // Implement this

        // If the user is not logged in, redirect to the login page
        if (!currentUser) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
        }

        // If the user is not a SiteAdmin, redirect to a "not authorized" page
        if (currentUser.role !== 'SiteAdmin') {
            return <Redirect to={{ pathname: '/not-authorized' }} />;
        }

        // Authorized as SiteAdmin, so render the component
        return <Component {...props} />;
    }} />
);

export default SiteAdminRoute;
