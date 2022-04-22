import { Dropdown } from "@material-tailwind/react";
import React from "react";
import { NavLink } from "react-router-dom";

const SingleNav = ({ data }) => {
  return (
    <>
      <Dropdown
        placement="bottom-start"
        buttonText={data.text}
        block={true}
        className="mb-2"
      >
        <li className="rounded-lg mb-2 ">
          <NavLink
            to={data.list[0].link}
            className=" flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
            activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
          >
            {data.list[0].add}
          </NavLink>
        </li>
        <li className="rounded-lg mb-2">
          <NavLink
            to={data.list[1].link}
            className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
            activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
          >
            {data.list[1].add}
          </NavLink>
        </li>
      </Dropdown>
    </>
  );
};

export default SingleNav;
