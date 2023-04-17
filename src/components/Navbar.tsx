import React from "react";
import Dropdown from "./Dropdown";

function Navbar() {
  return (
    <header className="w-full bg-purple-400 py-3 px-6 flex justify-between shadow-md">
      <h3 className="text-lg font-semibold text-white">Test App</h3>
      <Dropdown />
    </header>
  );
}

export default Navbar;
