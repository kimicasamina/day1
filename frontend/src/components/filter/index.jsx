import React from "react";

export default function Filter() {
  return (
    <div className="w-full flex gap-x-2 justify-end items-center pt-4">
      <span className="flex items-center gap-x-1 hover:bg-base-200 text-sm cursor-pointer px-2"></span>
      {/* <TbFilter />  */}
      All
      <span className="flex items-center gap-x-1 hover:bg-base-200 text-sm cursor-pointer px-2">
        {/* <TbSortAscendingLetters /> */}
        Completed
      </span>
      <span className="flex items-center gap-x-1 hover:bg-base-200 text-sm cursor-pointer px-2">
        {/* <TbSortAscendingLetters /> */}
        Not Completed
      </span>
    </div>
  );
}
