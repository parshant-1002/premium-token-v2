import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../public/navbar';
import { Footer } from '../public/footer';
import Sidebar from '../sidebar';

function PrivateLayout({ children }) {
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

export default PrivateLayout;
