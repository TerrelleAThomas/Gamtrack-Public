import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export default function AdminPrivateRoute () {
    ({component: Component, ...rest}) => {
        const [currentUser, setCurrentUser] = useState(null);
        const [isLoading, setIsLoading] = useState(true);
        const [isAdmin, setIsAdmin] = useState(false);

        useEffect(() => {
            const unsubscribe = firebase.auth().onAuthStateChanged(async user => {
                setCurrentUser(user);
                if (user) {
                    const userRef = firebase.firestore().collection('users').doc(user.uid);
                    const doc = await userRef.get();
                    if (doc.exists && doc.data().isAdmin) {
                        setIsAdmin(true);
                    } else {
                        setIsAdmin(false);
                    }
                }
                setIsLoading(false);
            });

            return () => unsubscribe();
        }, []);

        if (isLoading) {
            return <div>Loading...</div>; // Or any loading component
        }

        return (
            <Route {...rest} render={props => {
                if (!currentUser) {
                    // Not logged in, redirect to login page
                    return <Redirect to={{pathname: '/login', state: {from: props.location}}}/>;
                }

                if (!isAdmin) {
                    // Logged in but not an admin, redirect to home page or a "not authorized" page
                    return <Redirect to={{pathname: '/'}}/>;
                }

                // Logged in and is an admin, so redirect to the admin dashboard
                return <Redirect to={{pathname: '/admin-dashboard', state: {from: props.location}}}/>;
            }}/>
        );
    };
}


