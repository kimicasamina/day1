import React, { useState } from "react";
import TagsForm from "./tagsForm";
import Modal from "../modal";
import CreateTag from "../searchbar/createTag";
import { TbTags } from "react-icons/tb";

export default function Tags() {
  const [showModal, setShowModal] = useState(false);
  const [isNewTagCreation, setIsNewTagCreation] = useState(false);

  function closeModal() {
    setShowModal(false);
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
      {showModal && !isNewTagCreation ? (
        <Modal isVisible={showModal} onClose={closeModal}>
          {/* <CreateTag onClose={closeModal} /> */}
          <TagsForm onClose={closeModal} />
        </Modal>
      ) : null}
      {showModal && isNewTagCreation ? (
        <Modal isVisible={showModal} onClose={closeModal}>
          <CreateTag onClose={closeModal} />
          {/* <TagsForm onClose={closeModal} /> */}
        </Modal>
      ) : null}
      {/* <TagsChecklist /> */}
    </div>
  );
}
