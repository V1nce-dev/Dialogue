"use client";
import React, { useState } from "react";
import IsLoggedIn from "../home/UserLoggedIn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center justify-between p-6 drop-shadow-lg bg-black">
      <span className="font-semibold text-xl text-white">Dialogue</span>
      <div className="relative">
        <span>
          <button
            type="button"
            onClick={toggleOpen}
            className="inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium bg-white hover:bg-[#dddddd]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </span>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white">
            <div className="m-1 pl-2 hover:underline rounded-md">
            <IsLoggedIn />
            </div>
            <div className="m-1 pl-2 hover:underline rounded-md">
              Search
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
