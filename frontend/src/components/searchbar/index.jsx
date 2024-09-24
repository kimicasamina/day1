import axios from "axios";
import React, { useState } from "react";
import { TbTags } from "react-icons/tb";
import Modal from "../modal";
import CreateTag from "./createTag";
export default function SearchBar() {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className="w-full mx-auto py-10 flex gap-x-2 sm:px-0 sm:px-4">
      <input
        type="text"
        className="w-full py-2 px-4 input input-accent input-bordered rounded-md"
        placeholder="Search a keyword..."
      />
      <div
        className="flex-1 rounded-md px-2 border flex gap-x-2 items-center cursor-pointer hover:bg-secondary"
        onClick={(e) => setShowModal(true)}
      >
        <span className="">Tags</span>
        <TbTags className="w-8 h-8" />
      </div>
      {/* <div
        className="rounded-md p-2 border flex gap-x-2 items-center"
        onClick={(e) => setShowModal(true)}
      >
        <span className="">Tags</span>
        <TbTags className="w-8 h-8" />
      </div> */}
      {showModal && (
        <Modal isVisible={showModal} onClose={closeModal}>
          <CreateTag onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
}
