import React, { useState } from "react";

const Orders = () => {
  const [orders] = useState([
    {
      id: 1,
      userName: "John Doe",
      meal: "Veg Tiffin",
      status: "Delivered",
      date: "2024-11-20",
    },
    {
      id: 2,
      userName: "Jane Smith",
      meal: "Non-Veg Tiffin",
      status: "Pending",
      date: "2024-11-19",
    },
    {
      id: 3,
      userName: "Michael Brown",
      meal: "Jain Tiffin",
      status: "Cancelled",
      date: "2024-11-18",
    },
    {
      id: 4,
      userName: "Emily Davis",
      meal: "Diet Tiffin",
      status: "Delivered",
      date: "2024-11-17",
    },
    {
      id: 5,
      userName: "Chris Johnson",
      meal: "Special Tiffin",
      status: "Pending",
      date: "2024-11-16",
    },
    {
      id: 6,
      userName: "Sarah Wilson",
      meal: "South Indian Tiffin",
      status: "Delivered",
      date: "2024-11-15",
    },
    {
      id: 7,
      userName: "David Lee",
      meal: "North Indian Tiffin",
      status: "Cancelled",
      date: "2024-11-14",
    },
    {
      id: 8,
      userName: "Emma Moore",
      meal: "Gujarati Tiffin",
      status: "Pending",
      date: "2024-11-13",
    },
    {
      id: 9,
      userName: "Liam Harris",
      meal: "Maharashtrian Tiffin",
      status: "Delivered",
      date: "2024-11-12",
    },
    {
      id: 10,
      userName: "Olivia Martin",
      meal: "Continental Tiffin",
      status: "Pending",
      date: "2024-11-11",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState("");

  const ordersPerPage = 5;

  // Filter orders based on status
  const filteredOrders = filterStatus
    ? orders.filter((order) => order.status === filterStatus)
    : orders;

  // Pagination logic
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const startIndex = (currentPage - 1) * ordersPerPage;
  const currentOrders = filteredOrders.slice(
    startIndex,
    startIndex + ordersPerPage
  );

  const handleDelete = (orderId) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      alert(`Delete functionality for order ID: ${orderId}`);
      // Add your deletion logic here
    }
  };

  const handleEdit = (orderId) => {
    alert(`Edit functionality for order ID: ${orderId}`);
    // Add your editing logic here
  };

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-xl font-bold mb-4">Orders Management</h1>

      {/* Search and Filters */}
      <div className="mb-4 flex flex-wrap items-center justify-between">
        <input
          type="text"
          placeholder="Search by user or meal..."
          className="p-2 border rounded w-full md:w-1/3"
        />
        <select
          className="p-2 border rounded w-full md:w-1/4 mt-2 md:mt-0"
          value={filterStatus}
          onChange={(e) => {
            setFilterStatus(e.target.value);
            setCurrentPage(1); // Reset to the first page after filtering
          }}
        >
          <option value="">Filter by status</option>
          <option value="Delivered">Delivered</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      {/* Scrollable Orders Table */}
      <div
        className="bg-white rounded-lg shadow overflow-auto"
        style={{ maxHeight: "400px" }}
      >
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border border-gray-300">Order ID</th>
              <th className="p-2 border border-gray-300">User Name</th>
              <th className="p-2 border border-gray-300">Meal</th>
              <th className="p-2 border border-gray-300">Status</th>
              <th className="p-2 border border-gray-300">Date</th>
              <th className="p-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.id} className="text-center">
                <td className="p-2 border border-gray-300">{order.id}</td>
                <td className="p-2 border border-gray-300">{order.userName}</td>
                <td className="p-2 border border-gray-300">{order.meal}</td>
                <td
                  className={`p-2 border border-gray-300 ${
                    order.status === "Delivered"
                      ? "text-green-500"
                      : order.status === "Pending"
                      ? "text-orange-500"
                      : "text-red-500"
                  }`}
                >
                  {order.status}
                </td>
                <td className="p-2 border border-gray-300">{order.date}</td>
                <td className="p-2 border border-gray-300">
                  <button
                    onClick={() => handleEdit(order.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(order.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-700"
          }`}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === page
                ? "bg-blue-700 text-white"
                : "bg-blue-500 text-white hover:bg-blue-700"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Orders;
