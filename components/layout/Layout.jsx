'use client';

import CustomCursor from '../ui/CustomCursor';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;