import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TbFilterX } from "react-icons/tb";
import { TbFilterPlus } from "react-icons/tb";
import CreateTag from "@/components/tags/createTag";
import { deleteTag } from "@/store/tags/actions";

export default function DeleteTag({ tags, onClose }) {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState([]);
  const [showTagCreation, setShowTagCreation] = useState(false);

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

  return (
    <div className="flex flex-col gap-y-10">
      <div className="w-full grow flex flex-col gap-y-4 min-h-full justify-between ">
        <h2 className="text-3xl text-center font-semibold">Tags</h2>

        <div className="grid grid-cols-2">
          {tags.length > 0 ? (
            tags.map((tag, index) => (
              <span className="" key={index}>
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckClick(e, tag._id)}
                />
                <label className="ml-2">{tag.name}</label>
              </span>
            ))
          ) : (
            <div className="w-full">Tag is empty, create new tags.</div>
          )}
        </div>

        {selected.length !== 0 && (
          <button className="btn btn-error" onClick={(e) => handleDelete(e)}>
            Delete
            <TbFilterX className="w-5 h-5" />
          </button>
        )}
        {!showTagCreation ? (
          <button
            className="btn btn-info"
            onClick={(e) => setShowTagCreation((prev) => true)}
          >
            Add New
            <TbFilterPlus className="w-5 h-5" />
          </button>
        ) : null}
      </div>
      {showTagCreation ? <CreateTag onClose={onClose} /> : null}
    </div>
  );
}
