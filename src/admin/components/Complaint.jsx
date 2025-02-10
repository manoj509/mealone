import React, { useState } from "react";

const Complaint = () => {
  const [complaints, setComplaints] = useState([
    {
      id: "USR123",
      name: "Rahul Sharma",
      mobile: "9876543210",
      message: "Tiffin was delivered late today.",
      status: "Pending",
    },
    {
      id: "USR456",
      name: "Priya Verma",
      mobile: "8765432109",
      message: "Food quantity was less than expected.",
      status: "Pending",
    },
    {
      id: "USR789",
      name: "Amit Singh",
      mobile: "7654321098",
      message: "Chapati was not soft today.",
      status: "Pending",
    },
  ]);

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Handle search
  const filteredComplaints = complaints.filter(
    (complaint) =>
      complaint.name.toLowerCase().includes(search.toLowerCase()) ||
      complaint.message.toLowerCase().includes(search.toLowerCase())
  );

  // Handle sorting
  const sortedComplaints = [...filteredComplaints].sort((a, b) =>
    sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );

  // Toggle complaint status
  const toggleStatus = (index) => {
    const updatedComplaints = [...complaints];
    updatedComplaints[index].status =
      updatedComplaints[index].status === "Pending" ? "Resolved" : "Pending";
    setComplaints(updatedComplaints);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">User Complaints</h2>

      {/* Search & Sorting Controls */}
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search complaints..."
          className="p-2 border rounded-md w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          Sort by Name ({sortOrder === "asc" ? "A-Z" : "Z-A"})
        </button>
      </div>

      {/* Complaints Table */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 border">User ID</th>
              <th className="p-3 border">User Name</th>
              <th className="p-3 border">Mobile</th>
              <th className="p-3 border">Complaint Message</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedComplaints.map((complaint, index) => (
              <tr key={index} className="text-center border bg-white hover:bg-gray-50">
                <td className="p-3 border">{complaint.id}</td>
                <td className="p-3 border">{complaint.name}</td>
                <td className="p-3 border">{complaint.mobile}</td>
                <td className="p-3 border text-left">{complaint.message}</td>
                <td
                  className={`p-3 border font-semibold ${
                    complaint.status === "Pending" ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {complaint.status}
                </td>
                <td className="p-3 border">
                  <button
                    className={`px-4 py-2 rounded-md text-white ${
                      complaint.status === "Pending" ? "bg-red-500" : "bg-green-500"
                    }`}
                    onClick={() => toggleStatus(index)}
                  >
                    {complaint.status === "Pending" ? "Resolve" : "Reopen"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Complaint;
