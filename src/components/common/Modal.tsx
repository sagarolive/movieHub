import { useInfoModalStore } from "@/hooks";
import {
  cloneElement,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";
import { RxCross2 } from "react-icons/rx";

import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "25%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#212529",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.8)",
    zIndex: 100,
  },
};

const Modal = ({ children }: { children: ReactNode }) => {
  const { isOpen, closeModal } = useInfoModalStore();
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
