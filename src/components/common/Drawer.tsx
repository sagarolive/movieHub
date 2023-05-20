import React, { FC, ReactNode, useState } from "react";

// import component 👇
import CustomDrawer from "react-modern-drawer";

//Hooks imports
import { useDrawerStore } from "@/hooks";

//import styles 👇
import "react-modern-drawer/dist/index.css";

interface IDrawerProps {
  children: ReactNode;
}

const Drawer: FC<IDrawerProps> = ({ children }) => {
  const { isOpen, toggleDrawer } = useDrawerStore();

  return (
    <CustomDrawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      style={{
        background: "rgb(31,42,55)",
        width: "27rem",
        padding: "2rem",
      }}
    >
      {children}
    </CustomDrawer>
  );
};

export default Drawer;
