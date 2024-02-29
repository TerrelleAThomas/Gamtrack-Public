import React, { useContext, useState, useEffect } from 'react';
import { auth, firestore } from "/firebase"; // Adjust this path to where your firebase.js file is located
import { doc, getDoc } from 'firebase/firestore';

export const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userProfile, setUserProfile] = useState({});
    const [loading, setLoading] = useState(true);

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
        const unsubscribe = auth.onAuthStateChanged(async user => {
            setCurrentUser(user);
            if (user) {
                // Fetch user profile from Firestore
                const userProfileRef = doc(firestore, 'userProfiles', user.uid);
                const docSnap = await getDoc(userProfileRef);
                if (docSnap.exists()) {
                    setUserProfile(docSnap.data());
                } else {
                    console.log("No user profile found");
                }
            } else {
                setUserProfile({});
            }
            setLoading(false);
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
