import React from 'react';
import PrivateLayout from './private/PrivateLayout';
import PublicLayout from './public/PublicLayout';

function AppLayout({ isAuthenticated, children }) {
    if(isAuthenticated){
        return <PrivateLayout>{children}</PrivateLayout>
    }
    return (
        <PublicLayout>{children}</PublicLayout>
    );
}

export default AppLayout;
