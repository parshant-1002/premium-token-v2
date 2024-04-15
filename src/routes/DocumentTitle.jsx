import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import { pathToRegexp } from 'path-to-regexp';
import { AUTH_ROUTES } from './Auth';
import { PUBLIC_ROUTES } from './Public';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
function DocumentTitle({ isAuthenticated = false }) {
  const metaSectionContent = useSelector((store) => store.contentManagementReducer.homePageContent)?.metaSection
  const location = useLocation();
  const ROUTES = PUBLIC_ROUTES.concat(
    isAuthenticated ? AUTH_ROUTES : PUBLIC_ROUTES,
  );
  const matchedRoute = ROUTES.find((route) => route.path !== '*' && pathToRegexp(route.path).test(location.pathname));
  const title = matchedRoute ? matchedRoute.title : '';
  const res = useMemo(() => <Helmet>
    <title>PremiumToken - Buy, hold and win</title>
    <meta title={metaSectionContent?.title} />
    <meta name="description" content={metaSectionContent?.description} />
  </Helmet>)
  return (
    res
  );
}

export default DocumentTitle;
