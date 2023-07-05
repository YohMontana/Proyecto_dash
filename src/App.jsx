import React, { useState } from "react";

import {
  RiDashboardLine,
  RiBriefcaseLine,
  RiCalendar2Line,
  RiMessage2Line,
  RiLogoutBoxRLine,
  RiMenu3Fill,
  RiCloseLine,
  RiNotification3Line,
  RiArrowDownSLine,
  RiSearchLine,  
  RiCheckboxBlankCircleFill
} from "react-icons/ri";

function App() {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="min-h-screen grid grid-col-1 lg:grid-cols-6 ">
        {/* Sidebar - Primer Bloque */}
        <div
          className={`fixed lg:static w-[80%] md:w-[40%] lg:w-full top-0 z-50 bg-white transition-all  ${
            sidebar ? "-left-0" : "-left-full"
          } w-full h-full overflow-y-scroll col-span-1 p-8 border-r`}
        >
          {/* Logotipo */}
          <div className="text-center p-8">
            <h1 className="uppercase font-bold tracking-[4px]">Tu logo</h1>
          </div>
          <div className=" flex flex-col justify-between h-[750px]">
            {/* Menu */}
            <nav>
              <ul>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 hover:bg-purple-500 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold"
                  >
                    <RiDashboardLine />
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 hover:bg-purple-500 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold"
                  >
                    <RiBriefcaseLine />
                    Job Board
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 hover:bg-purple-500 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold"
                  >
                    <RiCalendar2Line />
                    Shedule
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 hover:bg-purple-500 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold"
                  >
                    <RiMessage2Line />
                    Messenger
                  </a>
                </li>
              </ul>
            </nav>
            {/* imagen and logout*/}
            <div className="flex flex-col gap-4">
              <img src="img.svg" alt="Image" />
              {/* Update */}
              <div className="bg-purple-50 p-8 flex flex-col gap-4 rounded-3xl">
                <h3 className="text-xl text-center">Get upgrade</h3>
                <p className="text-gray-500 text-center">
                  Lorem ipsum, dolor sit amet consectetur{" "}
                </p>
                <button className="bg-purple-600 text-white p-2 rounded-lg">
                  Learn more
                </button>
              </div>

              <a
                href="#"
                className="flex items-center gap-4 hover:bg-purple-500 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold"
              >
                <RiLogoutBoxRLine />
                Logout
              </a>
            </div>
          </div>
        </div>
        {/* Btn Menu movil */}
        <button
          onClick={handleSidebar}
          className="block lg:hidden absolute bottom-4 right-4 bg-purple-600 p-2 text-white rounded-full text-2xl "
        >
          {sidebar ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
        {/* Content - Segundo Bloque */}
        <div className="col-span-5">
          {/* Header */}
          <header className="flex items-center justify-between p-4 w-full">
            {/* Search */}
            <form className="w-[30%]">
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
            <nav className="w-[70%] flex justify-end">
              <ul className="flex items-center gap-4">
                <li>
                  <a href="#" className="relative">
                    <RiNotification3Line className="text-xl"/>
                    <RiCheckboxBlankCircleFill className="absolute -right-1 -top-1 text-xs text-red-500"/>
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
        </div>
      </div>
    </>
  );
}

export default App;
