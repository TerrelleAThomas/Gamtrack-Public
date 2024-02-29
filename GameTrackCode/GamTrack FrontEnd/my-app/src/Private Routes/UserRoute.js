import React, {useContext} from 'react';
import {Route, Redirect, Outlet, Navigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import {useAuth} from "../pages/AuthContext";

export default function UserRoute() {
    const { currentUser } = useAuth();

    if (currentUser && (sessionStorage.getItem("role") === 'user')){
        return <Outlet/>
    }
    else{
        return <Navigate to="/login" />;
    }
}

export default PrivateRoute;