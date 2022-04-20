import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import { useState } from "react";
import { OrderApi } from "Apis/OrdersApi";
import { Link } from "react-router-dom";

export default function PageVisitsCard() {
  const [Orders, setOrders] = useState(OrderApi.slice(0, 2));
  return (
    <Card>
      <CardHeader color="pink" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white text-2xl">Running Order</h2>
          <Button
            color="transparent"
            buttonType="link"
            size="lg"
            style={{ padding: 0 }}
          >
            Total 9
          </Button>
        </div>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Sno
                </th>
                <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  User Name
                </th>
                <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Account
                </th>
                <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Number
                </th>
                <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Transition Id
                </th>
                <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {Orders.map((e) => {
                return (
                  <tr key={e.id}>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {e.id}
                    </th>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {e.username}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {e.account}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      +880 {e.number}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      TK {e.amount}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {e.transitionId}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {e.status}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </CardBody>
      <Link to="/orders">
        <button className="bg-blue-500 px-4 py-2 rounded-xl shadow-sm text-white">
          View All
        </button>
      </Link>
    </Card>
  );
}
