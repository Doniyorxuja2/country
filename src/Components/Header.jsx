import React from "react";
import { FaMoon } from "react-icons/fa";
const Header = () => {
  const handleTheme = () => {
    const html = document.querySelector("html");
    html.classList.toggle("dark");
  };

  return (
    <div className=" bg-white dark:bg-[#2B3844] py-6">
      <div className="flex justify-between items-center container mx-auto ">
        <h1
          className="font-bold text-[24px] leading-8 text-[#111517] dark:text-white
        "
        >
          Where in the world?
        </h1>
        <div
          onClick={handleTheme}
          className="flex items-center gap-3 cursor-pointer"
        >
          <FaMoon className="dark:text-white" />
          <p className=" font-semibold text-[16px] leading-6 text-[#111517] hidden  dark:text-white sm:hidden md:block">
            Dark Mode
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
