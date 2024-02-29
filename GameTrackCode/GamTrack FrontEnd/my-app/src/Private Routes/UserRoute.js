import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from './AuthContext'; // Adjust the path based on your project structure

export default function UserRoute() {
    const { currentUser, userProfile } = useAuth();

    const isUserAuthorized = currentUser && !userProfile.IsAdmin && !userProfile.IsSiteAdmin;

    return isUserAuthorized ? <Outlet /> : <Navigate to="/login" replace />;
}
