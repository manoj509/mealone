import React, { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", mobile: "7620203121", subscribed: false, plan: "weekly one-time", diet: "Veg" },
    { id: 2, name: "Jane Smith", mobile: "7620203121", subscribed: true, plan: "15 days one-time", diet: "Non-Veg" },
    { id: 3, name: "Robert Brown", mobile: "7620203121", subscribed: true, plan: "15 days two-time", diet: "Veg" },
    { id: 4, name: "Alice Johnson", mobile: "9988776655", subscribed: true, plan: "monthly", diet: "Veg" },
    { id: 5, name: "Michael Lee", mobile: "8877665544", subscribed: false, plan: "N/A", diet: "N/A" },
    { id: 6, name: "David Wilson", mobile: "7766554433", subscribed: true, plan: "weekly one-time", diet: "Non-Veg" },
    { id: 7, name: "Emma White", mobile: "6655443322", subscribed: true, plan: "15 days two-time", diet: "Veg" },
    { id: 8, name: "Sophia Martinez", mobile: "5544332211", subscribed: false, plan: "N/A", diet: "N/A" },
    { id: 9, name: "Daniel Carter", mobile: "4433221100", subscribed: true, plan: "monthly", diet: "Non-Veg" },
    { id: 10, name: "Olivia Brown", mobile: "3322110099", subscribed: true, plan: "weekly one-time", diet: "Veg" },
    { id: 11, name: "Liam Garcia", mobile: "2211009988", subscribed: false, plan: "N/A", diet: "N/A" },
    { id: 12, name: "Noah Anderson", mobile: "1100998877", subscribed: true, plan: "monthly", diet: "Non-Veg" },
    { id: 13, name: "Ava Thompson", mobile: "9988776655", subscribed: true, plan: "15 days one-time", diet: "Veg" },
    { id: 14, name: "William Harris", mobile: "8877665544", subscribed: false, plan: "N/A", diet: "N/A" },
    { id: 15, name: "Mia Scott", mobile: "7766554433", subscribed: true, plan: "weekly one-time", diet: "Non-Veg" },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);
  const [userPlan, setUserPlan] = useState(null);
  const [filterSubscribed, setFilterSubscribed] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // Filter users based on subscription status
  const filteredUsers = users.filter((user) => {
    return (
      filterSubscribed === "all" || user.subscribed.toString() === filterSubscribed
    );
  });

  // Get current users for pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to confirm and delete a user
  const confirmDelete = (user) => {
    setUserToDelete(user);
  };

  const deleteUser = () => {
    if (userToDelete) {
      setUsers(users.filter((user) => user.id !== userToDelete.id));
      setUserToDelete(null);
    }
  };

  // Function to edit a user
  const editUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Admin User Management</h2>
      
      <div className="mb-4 flex space-x-4">
        <select
          className="p-2 border rounded ml-auto"
          value={filterSubscribed}
          onChange={(e) => setFilterSubscribed(e.target.value)}
        >
          <option value="all">All Users</option>
          <option value="true">Subscribed</option>
          <option value="false">Non-Subscriber</option>
        </select>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Mobile</th>
            <th className="p-2 border">Subscription Status</th>
            <th className="p-2 border">Plan</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="p-2 border">{user.id}</td>
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.mobile}</td>
              <td className={`p-2 border ${user.subscribed ? "text-green-600" : "text-red-600"}`}>
                {user.subscribed ? "Subscribed" : "Non-Subscriber"}
              </td>
              <td className="p-2 border">
                {user.subscribed ? (
                  <button
                    onClick={() => setUserPlan(user)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    View Plan
                  </button>
                ) : (
                  "N/A"
                )}
              </td>
              <td className="p-2 border">
                <button
                  onClick={() => editUser(user)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => confirmDelete(user)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for showing plan details */}
      {userPlan && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Plan Details</h3>
            <p><strong>Name:</strong> {userPlan.name}</p>
            <p><strong>Mobile:</strong> {userPlan.mobile}</p>
            <p><strong>Plan:</strong> {userPlan.plan}</p>
            <p><strong>Diet:</strong> {userPlan.diet}</p>
            <button
              onClick={() => setUserPlan(null)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {userToDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Confirm Delete</h3>
            <p>Are you sure you want to delete <strong>{userToDelete.name}</strong>?</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setUserToDelete(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2"
              >
                Cancel
              </button>
              <button
                onClick={deleteUser}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Edit User</h3>
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              value={selectedUser.name}
              onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
            <label className="block mb-2">Mobile:</label>
            <input
              type="text"
              value={selectedUser.mobile}
              onChange={(e) => setSelectedUser({ ...selectedUser, mobile: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
            <label className="block mb-2">Plan:</label>
            <input
              type="text"
              value={selectedUser.plan}
              onChange={(e) => setSelectedUser({ ...selectedUser, plan: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
            <label className="block mb-2">Diet:</label>
            <select
              value={selectedUser.diet}
              onChange={(e) => setSelectedUser({ ...selectedUser, diet: e.target.value })}
              className="w-full p-2 border rounded"
            >
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setSelectedUser(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Save edited user logic
                  setSelectedUser(null);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        {[...Array(Math.ceil(filteredUsers.length / usersPerPage)).keys()].map((num) => (
          <button
            key={num + 1}
            onClick={() => paginate(num + 1)}
            className={`mx-1 px-3 py-1 border rounded ${currentPage === num + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            {num + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;







