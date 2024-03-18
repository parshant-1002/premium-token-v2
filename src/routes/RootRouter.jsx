import React from 'react';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppLayout from '../shared/components/layouts/AppLayout';
import DocumentTitle from './DocumentTitle';
import { AUTH_ROUTES } from './Auth';
import { PUBLIC_ROUTES } from './Public';

function RootRouter() {
  const publicRoute = useRoutes(PUBLIC_ROUTES);
  const authenticated = useRoutes(AUTH_ROUTES);
  const token = useSelector((state) => state?.common?.token);
  // console.log('token-->>>', token);
  const isAuthenticated = !!token;
  return (
    <HelmetProvider>
      <DocumentTitle isAuthenticated={isAuthenticated} />
      <AppLayout isAuthenticated={isAuthenticated}>
        {true ? authenticated : publicRoute }
      </AppLayout>
    </HelmetProvider>
  );
}

export default RootRouter;
