import React, { useRef } from "react";

const Modal = ({ onClose, children }) => {
  const modalRef = useRef();

  const handleBackgroundClick = (event) => {
    if (event.target === modalRef.current) {
      onClose();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackgroundClick}
      ref={modalRef}
    >
      <div className="bg-white p-4 rounded-lg">
        <button className="absolute top-0 right-0 p-2" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;