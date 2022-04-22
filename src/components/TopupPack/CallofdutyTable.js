import { useState } from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import { Dropdown, DropdownItem } from "@material-tailwind/react";

export default function CallofdutyTable() {
  return (
    <Card className="lg:w-2/3 w-full mx-auto">
      <CardHeader color="purple" contentPosition="left">
        <h2 className="text-white text-2xl"> Active Packages 1 </h2>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  CP
                </th>
                <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Offer
                </th>
                <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Price
                </th>
                <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  304
                </td>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  10
                </td>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  Tk 200
                </td>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Dropdown color="purple" rounded buttonText="Action">
                    <DropdownItem>
                      <h1 className="w-full hover:text-white rounded-md py-1 border-none outline-none ">
                        Edit
                      </h1>
                    </DropdownItem>
                    <DropdownItem>
                      <h1 className="w-full  outline-0 border-0 hover:text-white rounded-md py-1 ">
                        Delete
                      </h1>
                    </DropdownItem>
                  </Dropdown>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
