import React from "react";

export default function Modal({ isVisible, onClose, children }) {
  if (!isVisible) {
    return null;
  }

  function handleCloseModal(e) {
    if (e.target.id === "wrapper") onClose();
  }

  return (
    <div
      id="wrapper"
      className="fixed inset-0 bg-slate-600/70 backdrop-blur-md flex justify-center items-center z-100"
      onClick={handleCloseModal}
    >
      <div className="w-[50%] h-[50%] rounded-md bg-base-100 ">
        <button className="btn btn-xs" onClick={() => onClose()}>
          Close Modal
        </button>
        <div className="bg-slate-100 p-2">{children}</div>
      </div>
    </div>
  );
}
