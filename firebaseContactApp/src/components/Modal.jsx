import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="absolute top-0 z-40 grid h-screen w-screen place-items-center backdrop-blur">
          <div className="relative z-50 m-auto flex min-h-[200px] min-w-[80%] flex-col rounded-2xl bg-white p-4">
            <div className="flex self-end ">
              <AiOutlineClose
                onClick={onClose}
                className=" text-2xl hover:cursor-pointer"
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root"),
  );
};

export default Modal;
