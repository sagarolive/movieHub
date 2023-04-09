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
    top: "50%",
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
  },
};

const ModalContext = createContext<
  [isOpen: boolean, setIsOpen: (state: boolean) => null]
>([false, () => null]);

const callAll =
  (...fns: any) =>
  (...args: any) =>
    fns.forEach((fn: any) => fn && fn(...args));

function CustomModal(props: any) {
  const [isOpen, setIsopen] = useState(false);
  const { className, size, centered, backdrop } = props;

  return (
    <ModalContext.Provider
      value={[isOpen, setIsopen, className, size, centered, backdrop]}
      {...props}
    />
  );
}

function ModalDismissButton({ children }: { children: any }) {
  const [, setIsOpen] = useContext(ModalContext);

  return cloneElement(children, {
    onClick: callAll(() => setIsOpen(false), children.props.onClick),
  });
}

function ModalOpenButton({ children }: { children: any }) {
  const [, setIsOpen] = useContext(ModalContext);

  return cloneElement(children, {
    onClick: callAll(() => setIsOpen(true), children.props.onClick),
  });
}

function ModalSubmitButton({ children }: { children: any }) {
  const [, setIsOpen] = useContext(ModalContext);

  return cloneElement(children, {
    onClick: callAll(children.props.onClick, () => setIsOpen(false)),
  });
}

const ModalBase = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useContext(ModalContext);
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
    >
      <div className="relative">
        <div
          className=" absolute right-0 cursor-pointer text-2xl"
          onClick={() => setIsOpen(false)}
        >
          <RxCross2 className="text-red-400" />
        </div>
        {children}
      </div>
    </ReactModal>
  );
};
function ModalContents({
  title,
  children,
  ...props
}: {
  title: string;
  children: React.ReactNode;
}) {
  return <ModalBase {...props}>{children}</ModalBase>;
}

export {
  CustomModal,
  ModalDismissButton,
  ModalOpenButton,
  ModalContents,
  ModalContext,
  ModalSubmitButton,
};
