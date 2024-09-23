import React from "react";
import { BiX } from "react-icons/bi";

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
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-10 cursor-default"
      onClick={handleCloseModal}
    >
      <div className="w-full mx-4 sm:max-w-[50%] h-auto rounded-md bg-base-100 flex flex-col gap-y-2 p-6 ">
        {/* <button
          className="p-2 self-end hover:bg-secondary rounded-full"
          onClick={() => onClose()}
        >
          <BiX />
        </button> */}
        <div className="grow">{children}</div>
      </div>
    </div>
  );
}
