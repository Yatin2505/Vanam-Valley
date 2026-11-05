// src/layouts/MainLayout.jsx
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import SmoothScroll from '../components/SmoothScroll';

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-[#001D18] text-white selection:bg-[#D8B879] selection:text-[#002620]">
        <Navbar />
        <main className="flex-1 w-full overflow-hidden">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </SmoothScroll>
  );
};

export default MainLayout;
