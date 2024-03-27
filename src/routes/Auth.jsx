import { Navigate } from "react-router-dom";
import About from "../pages/about";
import { ROUTES, WILDCARD_ROUTES } from "../shared/constants/routes";
import HeaderContent from "../pages/content-management/header-content";
import Home from "../pages/home/Home";
import TermsAndConditions from "../pages/terms-and-conditions";
import PrivacyPolicy from "../pages/privacy-policy";

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
    {
        path: ROUTES.TERMS_AND_CONDITIONS,
        element: <TermsAndConditions />,
    },
    {
        path: ROUTES.PRIVACY_POLICY,
        element: <PrivacyPolicy />,
    },
];