import React, { useState } from "react";

export default function DeliveryBoyList() {
  const [deliveryBoys, setDeliveryBoys] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", mobile: "1234567890" },
    { id: 2, name: "Michael Smith", email: "michael@example.com", mobile: "0987654321" },
    { id: 3, name: "David Johnson", email: "david@example.com", mobile: "1122334455" },
  ]);

  const deleteDeliveryBoy = (id) => {
    setDeliveryBoys(deliveryBoys.filter((boy) => boy.id !== id));
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Delivery Boy List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Mobile</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {deliveryBoys.map((boy) => (
            <tr key={boy.id} className="text-center bg-white">
              <td className="border border-gray-300 p-2">{boy.name}</td>
              <td className="border border-gray-300 p-2">{boy.email}</td>
              <td className="border border-gray-300 p-2">{boy.mobile}</td>
              <td className="border border-gray-300 p-2">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => deleteDeliveryBoy(boy.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
