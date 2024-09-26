import React, { useState } from "react";
import DeleteTag from "./deleteTag";
import Modal from "../modal";
import { TbTags } from "react-icons/tb";
import { useSelector } from "react-redux";

export default function Tags() {
  const tags = useSelector((state) => state.tags);
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  if (!tags) {
    return <h1 className="">Loading...</h1>;
  }

  return (
    <div className="flex items-center ">
      <div
        className="flex-1 rounded-md py-2 px-4 border flex gap-x-2 items-center cursor-pointer hover:bg-secondary"
        onClick={(e) => setShowModal(true)}
      >
        <span className="">Tags</span>
        <TbTags className="w-8 h-8" />
      </div>

      {showModal ? (
        <Modal isVisible={showModal} onClose={closeModal}>
          <DeleteTag onClose={closeModal} tags={tags} />
        </Modal>
      ) : null}
    </div>
  );
}
