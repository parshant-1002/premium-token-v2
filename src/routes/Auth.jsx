import { Navigate } from "react-router-dom";
import About from "../pages/about";
import { ROUTES, WILDCARD_ROUTES } from "../shared/constants/routes";
import HeaderContent from "../pages/content-management/header-content";
import Home from "../pages/home/Home";

export const AUTH_ROUTES = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: `${ROUTES.CONTENT_MANAGEMENT}/top-navbar`,
        element: <HeaderContent />,
    },
    {
        path: `${ROUTES.CONTENT_MANAGEMENT}/section-1`,
        element: <About />,
    },
    {
        path: '*',
        element: <Navigate to={WILDCARD_ROUTES.PUBLIC} />,
        title: 'Rendering wildcard',
    },
];