import axios from "axios";
import React, { useState } from "react";
export default function SearchBar() {
  return (
    <div className="w-full flex-1 mx-auto flex items-center ">
      <input
        type="text"
        className="w-full py-2 px-4 input input-accent input-bordered rounded-md"
        placeholder="Search a keyword..."
      />

      {/* <div
        className="rounded-md p-2 border flex gap-x-2 items-center"
        onClick={(e) => setShowModal(true)}
      >
        <span className="">Tags</span>
        <TbTags className="w-8 h-8" />
      </div> */}
    </div>
  );
}
