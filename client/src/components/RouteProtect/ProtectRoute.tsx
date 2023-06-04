import React, { ReactComponentElement } from 'react'
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { RootState } from '../../store/store';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = (props) => {
    const user = useSelector((state: RootState) => state.auth).token === ""
    console.log("protetc")
    let location = useLocation();

    if (user) {
        return <Navigate to="/" />
    }
    return <>{props.children}</>; // Thêm cặp dấu <></> để bao bọc children
};

export default ProtectedRoute;
