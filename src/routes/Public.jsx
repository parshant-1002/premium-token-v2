import { Navigate } from "react-router-dom";
import AboutPage from "../pages/about";
import { WILDCARD_ROUTES } from "../shared/constants/routes";
import NotFoundPage from "../pages/notfound/NotFoundPage";
import ForgotPasswordPage from "../pages/login/ForgotPasswordPage";
import ResetPasswordPage from "../pages/login/ResetPasswordPage"; 
import Home from "../pages/home/Home";


export const PUBLIC_ROUTES = [
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "/not-found",
        element: <NotFoundPage />,
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPasswordPage />,
    },
    {
        path: "/reset-password/:token",
        element: <ResetPasswordPage />,
    },
    {
        path: '*',
        element: <Navigate to={WILDCARD_ROUTES.PRIVATE} />,
        title: 'Rendering wildcard',
    },
];