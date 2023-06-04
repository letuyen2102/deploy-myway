import { useSelector } from "react-redux";
import { useEffect } from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import Header from "../Header/Header";
import Login from "../login/Login";
import Footer from "../Footer/Footer";
import ProfileUser from "../../pages/profile/ProfileUser";

export const ProtectedAdminRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
    const handleLoginAndCart = useSelector((state: RootState) => state.auth)
    const navigate = useNavigate();
    const isAdmin = handleLoginAndCart.token && handleLoginAndCart.user.role === 'admin';

    useEffect(() => {
        if (!isAdmin) {
            navigate('/admin/login');
        } else if (isAdmin && window.location.pathname === '/admin/login') {
            navigate('/myway/admin');
        }
    }, [isAdmin, navigate]);

    return <>{element}</>;
};
export const ProtectedUserRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
    const handleLoginAndCart = useSelector((state: RootState) => state.auth)
    const navigate = useNavigate();
    const isLogin = handleLoginAndCart.token === "" ? false : true

    return <>{isLogin ? <ProfileUser /> : <div><Header /> <Login /> <Footer /> </div>}</>
};