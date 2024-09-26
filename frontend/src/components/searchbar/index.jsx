import React, { useState } from "react";
export default function SearchBar({ setSearchInput }) {
  return (
    <div className="w-full flex-1 mx-auto flex items-center ">
      <input
        type="text"
        className="w-full py-2 px-4 input input-accent input-bordered rounded-md"
        placeholder="Search for keyword or tags"
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
}
