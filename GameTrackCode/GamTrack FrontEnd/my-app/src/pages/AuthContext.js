import React, { useContext, useState, useEffect } from 'react';
import { auth } from './firebase'; // Adjust this import according to your project structure

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [userProfile, setUserProfile] = useState({});
    const [loading, setLoading] = useState(true);

    // Authentication actions
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            if (user) {
                // Fetch user profile from Firestore
                const userProfileRef = firebase.firestore().collection('userProfiles').doc(user.uid);
                userProfileRef.get().then(doc => {
                    if (doc.exists) {
                        setUserProfile(doc.data());
                    }
                    setLoading(false);
                });
            } else {
                setUserProfile({}); // Reset userProfile when there's no user
                setLoading(false);
            }
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        userProfile,
        signup,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
