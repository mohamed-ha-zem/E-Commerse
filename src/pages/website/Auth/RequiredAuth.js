import { useContext } from "react";
import { User } from "./context";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequiredAuth() {
    const user = useContext(User)
    const location = useLocation()

    return user.auth.userDetails ? <Outlet/> : <Navigate state={{from: location}}  replace  to="/login"/>
}