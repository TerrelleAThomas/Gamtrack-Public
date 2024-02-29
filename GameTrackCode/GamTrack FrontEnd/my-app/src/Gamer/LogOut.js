import React, {useContext} from 'react';
import {Redirect} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";


export default function Logout () {
    const context = useContext(AuthContext);
    context.signOut();
    return (
        <Redirect to="/login" />
    );
}