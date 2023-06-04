import { useSelector } from "react-redux";
import React, { useEffect } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";

export const ProtectedAdminRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
    const handleLoginAndCart = useSelector((state: RootState) => state.auth)
    const navigate = useNavigate();
    const isAdmin = handleLoginAndCart.token && handleLoginAndCart.user.role === 'admin';

    useEffect(() => {
        if ((!isAdmin) && window.location.pathname === '/admin/login') {
            navigate('/admin/login');
        } else if (isAdmin) {
            navigate('/myway/admin');
        }
    }, [isAdmin, navigate]);

    return <>{element}</>;
};
export const ProtectedUserRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
    const handleLoginAndCart = useSelector((state: RootState) => state.auth)
    const navigate = useNavigate();
    const isLogged = handleLoginAndCart.token

    useEffect(() => {
        if ((!isLogged) && window.location.pathname === '/account/login') {
            navigate('/account/login');
        } else if (isLogged) {
            navigate('/profile/account/user');
        }
    }, [isLogged, navigate]);

    return <>{element}</>;
}
