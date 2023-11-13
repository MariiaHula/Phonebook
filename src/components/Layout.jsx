import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import CategoryLoader from './ContentLoader';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Suspense
          fallback={
            <div className="flex justify-center items-center">
              <CategoryLoader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
