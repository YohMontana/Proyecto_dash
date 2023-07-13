import React from "react";
import {
  RiSearchLine,
  RiNotification3Line,
  RiArrowDownSLine,
  RiCheckboxBlankCircleFill
} from "react-icons/ri";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 md:px-8 lg:px-12 w-full">
      {/* Search */}
      <form className="w-full md:[40%] lg:w-[30%] order-1 md:order-none">
        <div className="relative">
          <RiSearchLine className="absolute left-2 top-3" />
          <input
            type="text"
            className="bg-gray-100 py-2 pl-8 pr-4 outline-none rounded-lg w-full"
            placeholder="Buscar"
          />
        </div>
      </form>
      {/* Notifications */}
      <nav className="w-full md:w-[60%] lg:w-[70%] flex justify-center md:justify-end">
        <ul className="flex items-center gap-4">
          <li>
            <a href="#" className="relative">
              <RiNotification3Line className="text-xl" />
              <RiCheckboxBlankCircleFill className="absolute -right-1 -top-1 text-xs text-red-500" />
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-1">
              Jhancarlo Esteban Coro
              <RiArrowDownSLine />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
