import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TbFilterSearch } from "react-icons/tb";
import { TbFilterX } from "react-icons/tb";
import { TbFilterPlus } from "react-icons/tb";
import Modal from "@/components/modal";
import CreateTag from "@/components/searchbar/createTag";
import { useUi } from "@/context/ui/ui";
import { deleteTag } from "@/store/tags/actions";

export default function TagsForm({ onClose }) {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tags);
  const [selected, setSelected] = useState([]);
  // const { selectedTags, setSelectedTags } = useUi();
  // // const [showModal, setShowModal] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  function handleCheckClick(e, id) {
    console.log("ID:", id);

    let find = selected.findIndex((item) => item === id);
    if (find === -1) {
      // add to the list
      setSelected([...selected, id]);
    } else {
      // remove from the list
      const newSelected = selected.filter((item) => item !== id);
      setSelected([...newSelected]);
    }
  }

  async function handleDelete(e) {
    console.log("DELETING ITEMS");
    selected.map((item) => {
      dispatch(deleteTag(item));
    });
    onClose();
  }

  function handleSubmit(e) {
    e.preventDefault();

    const selectedTags = tags.filter((tag) => {
      if (selected.includes(tag._id)) {
        return tag;
      }
    });
    console.log("SELECTED TAGS: ", selectedTags);
  }

  // function closeModal() {
  //   setShowModal(false);
  // }

  return (
    <>
      <form
        className="w-full grow flex flex-col gap-y-4 min-h-full justify-between"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="text-3xl text-center font-semibold">Filter Tags</h2>

        <div className="grid grid-cols-2">
          {tags.length > 0
            ? tags.map((tag, index) => (
                <span className="" key={index}>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckClick(e, tag._id)}
                  />
                  <label className="ml-2">{tag.name}</label>
                </span>
              ))
            : null}
        </div>
        <button type="submit" className="btn btn-warning">
          Search
          <TbFilterSearch className="w-5 h-5" />
        </button>
        <button
          className="btn btn-info"
          onClick={(e) => {
            // setShowModal(false);
            setIsAdd(true);
          }}
        >
          Add New
          <TbFilterPlus className="w-5 h-5" />
        </button>
        {selected.length !== 0 && (
          <button className="btn btn-error" onClick={(e) => handleDelete(e)}>
            Delete
            <TbFilterX className="w-5 h-5" />
          </button>
        )}

        {isAdd ? <CreateTag onClose={onClose} /> : null}
      </form>
    </>
  );
}
