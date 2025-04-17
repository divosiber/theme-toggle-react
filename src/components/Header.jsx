import React from "react";

import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

function Header({theme, setTheme}) {
  return (
    <div className="shadow-xl">
      <div className="max-w-[1140px] mx-auto flex justify-between items-center py-5 px-10">
        <div className="text-xl font-bold">DivTech</div>
        <div className="cursor-pointer" onClick={() => setTheme((prev)=> prev === "light" ? "dark" : "light")}>
          {theme === "light" ?(
            <FaMoon />
          ):(
            <FaSun/>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
