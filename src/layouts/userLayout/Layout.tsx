import React, { FC, ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface ILayoutProps {
  children: ReactNode;
}
const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900  min-h-screen px-4  2xl:px-72 lg:px-10 py-4">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
