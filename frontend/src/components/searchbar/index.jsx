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
    <div className="w-full sm:max-w-[350px] mx-auto py-10 flex gap-x-2 px-4 sm:px-0">
      <input
        type="text"
        className="w-full py-2 px-4 input input-accent input-bordered "
        placeholder="Search a keyword..."
      />
      <span className="btn btn-square " onClick={(e) => setShowModal(true)}>
        <TbTags className="w-8 h-8" />
      </span>
      {showModal && (
        <Modal isVisible={showModal} onClose={closeModal}>
          <CreateTag onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
}
