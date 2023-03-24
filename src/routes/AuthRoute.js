import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const AuthRoute = ({ children }) => {
    const authUser = useSelector(({ authUser }) => authUser);
    const location = useLocation();

    return authUser !== null ? (
        children
    ) : (
        <Navigate to='/' replace state={{ path: location.pathname }} />
    );
};
export default AuthRoute;