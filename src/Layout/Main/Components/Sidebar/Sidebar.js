import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineStock, AiFillPieChart } from "react-icons/ai";

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;
  const NavRoutes = [
    {
      section: "Dashboard",
      routes: [
        {
          icon: AiFillPieChart,
          path: "/",
          title: "Overview",
        },
      ],
    },
  ];

  return (
    <div className="max-w-2/12 h-screen sticky top-0 px-4 py-12 md:px-9 lg:px-9  flex flex-col gap-16 bg-slate-800 drop-shadow-xl ring rounded-r-xl">
      <div className="flex flex-row gap-2 justify-center md:justify-start text-white items-center">
        <AiOutlineStock className="w-10 h-10 font-semibold" />
        <div className="hidden md:block md:text-2xl font-semibold">
          Inflation Tracker
        </div>
      </div>

      {NavRoutes.map((section, index) => (
        <div
          className="flex flex-col gap-5"
          key={`section-${index}-${section.section}`}
        >
          <div className=" text-xs flex tracking-wider uppercase font-semibold text-white">
            {section.section}
          </div>
          <div className="flex flex-col gap-3">
            {section.routes.map((route, rdx) => (
              <NavLink
                key={`section-${index}-${rdx}`}
                to={route.path}
                className={`group hover:bg-indigo-200 py-1 px-3 rounded-md transition-all ease-linear duration-75 ${
                  pathname === route.path
                    ? " text-slate-800 bg-slate-200"
                    : "text-white"
                }`}
              >
                <div className="flex flex-row gap-4 font-medium justify-start items-center">
                  <route.icon className="h-5 w-5 group-hover:text-slate-800 transition-all ease-linear duration-75" />
                  <div className="tracking-wide text-sm md:text-sm lg:text-sm group-hover:text-slate-800 transition-all ease-linear duration-75">
                    {route.title}
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
