import React from 'react';

export function PublicLayout({ children }) {
  return (
    <main id="main">
      {/* <Navbar /> */}
      {/* <Sidebar /> */}
      {children}
      {/* <Outlet /> */}
      {/* <Footer /> */}
    </main>
  );
}

export default PublicLayout;
