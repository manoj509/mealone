



import { useState } from "react";

const DeliveryRequests = () => {
  const [requests, setRequests] = useState([
    { id: 1, name: "John Doe", mobile: "9876543210", address: "123 Street, City", status: "pending" },
    { id: 2, name: "Jane Smith", mobile: "8765432109", address: "456 Avenue, Town", status: "pending" },
    { id: 3, name: "Michael Brown", mobile: "7654321098", address: "789 Boulevard, Village", status: "pending" },
  ]);

  const handleAction = (id, action) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === id ? { ...req, status: action } : req
      )
    );
  };

  const handleDelete = (id) => {
    setRequests((prevRequests) => prevRequests.filter((req) => req.id !== id));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Delivery Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Delivery Requests Section */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Delivery Boy Requests</h3>
          <div className="space-y-4">
            {requests.filter((req) => req.status === "pending").length > 0 ? (
              requests
                .filter((req) => req.status === "pending")
                .map((req) => (
                  <div key={req.id} className="p-4 bg-white rounded-md shadow-sm">
                    <p className="font-medium text-lg">{req.name}</p>
                    <p className="text-sm text-gray-600">📞 {req.mobile}</p>
                    <p className="text-sm text-gray-600">🏠 {req.address}</p>
                    <div className="mt-2 flex gap-2">
                      <button
                        onClick={() => handleAction(req.id, "accepted")}
                        className="px-3 py-1 bg-green-500 text-white rounded-md"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleAction(req.id, "rejected")}
                        className="px-3 py-1 bg-red-500 text-white rounded-md"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))
            ) : (
              <p className="text-gray-600 text-center">No pending requests.</p>
            )}
          </div>
        </div>

        {/* Assigned Delivery Boys Section */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Assigned Delivery Boys</h3>
          {requests.filter((req) => req.status === "accepted").length > 0 ? (
            <ul className="space-y-3">
              {requests
                .filter((req) => req.status === "accepted")
                .map((req) => (
                  <li
                    key={req.id}
                    className="p-4 bg-white rounded-md shadow-sm flex justify-between items-center"
                  >
                    <div>
                      <p className="font-medium text-lg">{req.name}</p>
                      <p className="text-sm text-gray-600">📞 {req.mobile}</p>
                      <p className="text-sm text-gray-600">🏠 {req.address}</p>
                      <span className="mt-2 inline-block px-3 py-1 bg-green-200 text-green-800 rounded-md text-sm">
                        Accepted
                      </span>
                    </div>
                    <button
                      onClick={() => handleDelete(req.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded-md"
                    >
                      Delete
                    </button>
                  </li>
                ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-center">No assigned delivery boys yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeliveryRequests;
