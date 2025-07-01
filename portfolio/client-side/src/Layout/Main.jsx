import React from "react";
import Navbar from '../Components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {
    const location = useLocation();

    const hideNavbarRoutes = ['/about', '/skills', '/resume', '/projects', '/contact'];
    const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

    return (
        <div>
            {/* <Navbar></Navbar> */}
            {!shouldHideNavbar && <Navbar />}  {/* Only show if route is not in the list */}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;