






















import React from "react";

const Users = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    subscription: "Two-Time Veg",
    remainingLeaves: 10,
    active: true,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-orange-500 text-white p-4 text-center">
          <h2 className="text-2xl font-bold">User Profile</h2>
        </div>
        <div className="p-6 space-y-6">
          {/* User Info Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Personal Details</h3>
            <div className="mt-2 text-gray-600 space-y-1">
              <p>
                <span className="font-semibold">Name:</span> {user.name}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                <span
                  className={`${
                    user.active ? "text-green-600" : "text-red-600"
                  } font-semibold`}
                >
                  {user.active ? "Active" : "Inactive"}
                </span>
              </p>
            </div>
          </div>

          {/* Subscription Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Subscription Details</h3>
            <div className="mt-2 text-gray-600 space-y-1">
              <p>
                <span className="font-semibold">Plan:</span> {user.subscription}
              </p>
              <p>
                <span className="font-semibold">Remaining Leaves:</span> {user.remainingLeaves}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
              Update Profile
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200">
              Cancel Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
