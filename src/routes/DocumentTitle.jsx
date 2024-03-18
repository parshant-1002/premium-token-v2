import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import { pathToRegexp } from 'path-to-regexp';
import { AUTH_ROUTES } from './Auth';
import { PUBLIC_ROUTES } from './Public';

// eslint-disable-next-line react/prop-types
function DocumentTitle({ isAuthenticated = false }) {
  const location = useLocation();
  const ROUTES = PUBLIC_ROUTES.concat(
    isAuthenticated ? AUTH_ROUTES : PUBLIC_ROUTES,
  );
  const matchedRoute = ROUTES.find((route) => route.path !== '*' && pathToRegexp(route.path).test(location.pathname));
  const title = matchedRoute ? matchedRoute.title : '';
  return (
    <Helmet>
      <title>Premium token</title>
      <meta title={title} />
      <meta name="description" content="Join a community of like minded people who share your interests, and make new friends today!" />
    </Helmet>
  );
}

export default DocumentTitle;
