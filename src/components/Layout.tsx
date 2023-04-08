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
      {children}
      <Footer />
    </>
  );
};

export default Layout;
