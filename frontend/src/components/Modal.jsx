import React from "react";

const Modal = ({ show, onClose, title, message, buttonLabel }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white pb-4 rounded-2xl shadow-lg max-w-md w-full border-[#056480] border">
        <h2 className="text-lg font-semibold mb-4 bg-[#056480] py-4 rounded-t-2xl px-4 text-white">
          {title}
        </h2>
        <div className="px-4">
          <p className="text-[#056480]">{message} </p>
          <div className="flex justify-end">
            <button
              className="mt-6 bg-[#056480] text-white py-2 text-sm px-4 rounded-full"
              onClick={onClose}
            >
              {buttonLabel}{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
