import React, { useState } from "react";

const Plans = () => {
  const [plans, setPlans] = useState([
    {
      id: 1,
      price: "2000",
      mealType: "Veg - 1 Time",
      description: "5 days veg,2 days special veg, 30 Tiffin",
      image: "https://via.placeholder.com/100", // Placeholder image
    },
    {
      id: 2,
      price: "2000",
      mealType: "Veg",
      description: "5 days veg,2 days special veg, 60 Tiffin",
      image: "https://via.placeholder.com/100", // Placeholder image
    },
  ]);

  const [newPlan, setNewPlan] = useState({
    price: "",
    mealType: "",
    description: "",
    image: null,
  });

  const [showForm, setShowForm] = useState(false); // Control visibility of the Add Plan form
  const [editingPlan, setEditingPlan] = useState(null); // Plan being edited
  const [showEditModal, setShowEditModal] = useState(false); // Control visibility of the Edit Modal

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editingPlan) {
      setEditingPlan({ ...editingPlan, [name]: value });
    } else {
      setNewPlan({ ...newPlan, [name]: value });
    }
  };

  // Handle File Upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (editingPlan) {
      setEditingPlan({ ...editingPlan, image: file });
    } else {
      setNewPlan({ ...newPlan, image: file });
    }
  };

  // Handle Add Plan
  const handleAddPlan = (e) => {
    e.preventDefault();
    if (newPlan.price && newPlan.mealType && newPlan.description && newPlan.image) {
      setPlans([
        ...plans,
        {
          ...newPlan,
          id: plans.length + 1,
          image: URL.createObjectURL(newPlan.image), // Convert uploaded file to preview URL
        },
      ]);
      setNewPlan({ price: "", mealType: "", description: "", image: null });
      setShowForm(false);
    } else {
      alert("Please fill all fields");
    }
  };

  // Handle Delete Plan
  const handleDeletePlan = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  // Handle Edit Plan
  const handleEditPlan = (e) => {
    e.preventDefault();
    if (editingPlan.price && editingPlan.mealType && editingPlan.description) {
      setPlans(
        plans.map((plan) =>
          plan.id === editingPlan.id
            ? {
                ...editingPlan,
                image: editingPlan.image instanceof File
                  ? URL.createObjectURL(editingPlan.image) // Convert uploaded file to preview URL
                  : editingPlan.image,
              }
            : plan
        )
      );
      setShowEditModal(false); // Close modal after editing
      setEditingPlan(null);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Plan Management</h2>

      {/* Add Plan Button */}
      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-6 hover:bg-blue-600"
      >
        Add New Plan
      </button>

      {/* Add Plan Form */}
      {showForm && (
        <form onSubmit={handleAddPlan} className="bg-gray-100 p-4 rounded mb-6">
          <h3 className="text-xl font-semibold mb-4">Add New Plan</h3>
          <div className="mb-4">
            <label className="block font-medium mb-2">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={newPlan.price}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter price"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Meal Type</label>
            <input
                type="text"
                name="mealtype"
                value={editingPlan.mealType}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Plan Description</label>
            <textarea
              name="description"
              value={newPlan.description}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter plan description"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Upload Meal Image</label>
            <input type="file" onChange={handleFileUpload} className="w-full" />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded mr-2 hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Plan
            </button>
          </div>
        </form>
      )}

      {/* Existing Plans List */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Existing Plans</h3>
        {plans.length > 0 ? (
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">ID</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Meal Type</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Image</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => (
                <tr key={plan.id}>
                  <td className="border p-2 text-center">{plan.id}</td>
                  <td className="border p-2 text-center">₹{plan.price}</td>
                  <td className="border p-2 text-center">{plan.mealType}</td>
                  <td className="border p-2">{plan.description}</td>
                  <td className="border p-2 text-center">
                    <img
                      src={plan.image}
                      alt={plan.mealType}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="border p-2 text-center">
                    <button
                      onClick={() => {
                        setEditingPlan(plan);
                        setShowEditModal(true);
                      }}
                      className="bg-green-500 text-white px-2 py-1 rounded mr-2 hover:bg-green-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeletePlan(plan.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No plans available. Add a new plan to get started.</p>
        )}
      </div>

      {/* Edit Plan Modal */}
      {showEditModal && editingPlan && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <form onSubmit={handleEditPlan} className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Edit Plan</h3>
            <div className="mb-4">
              <label className="block font-medium mb-2">Price (₹)</label>
              <input
                type="number"
                name="price"
                value={editingPlan.price}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">Meal Type</label>
              <input
                type="text"
                name="mealType"
                value={editingPlan.mealType}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">Plan Description</label>
              <textarea
                name="description"
                value={editingPlan.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">Upload Meal Image</label>
              <input type="file" onChange={handleFileUpload} className="w-full" />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowEditModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded mr-2 hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Plans;
