

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { createPlan, deletePlan, getPlans, updatePlan } from "../../redux/slices/planSlice";
import { notifySuccess } from "../../utils/ToastUtils";
const Plans = () => {
  const [showForm, setShowForm] = useState(false);
  const [showEditePlan, setShowEditePlan] = useState(false)
  const { plans, loading, error , planUpdatedSuccessfully} = useSelector((state) => state.plan);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlans());
    setShowEditePlan(false)
}, [planUpdatedSuccessfully]);
 


  const [currentPlan, setCurrentPlan] = useState(null)
  // Formik for Form Management
  const formik = useFormik({
    initialValues: {
      price: "",
      mealType: "",
      validityDays: "",
      maxTiffins: "",
      description: "",
      image: null,
    },
    validationSchema: Yup.object({
      price: Yup.number()
        .required("Price is required")
        .positive("Price must be positive"),
      mealType: Yup.string().required("Meal type is required"),
      validityDays: Yup.number()
        .required("Validity days are required")
        .positive("Validity days must be positive"),
      maxTiffins: Yup.number()
        .required("Max tiffins are required")
        .positive("Max tiffins must be positive"),
      description: Yup.string().required("Description is required"),
      image: Yup.mixed().required("Image is required"),
    }),
    onSubmit: (values , {resetForm}) => {
      const formData = new FormData();
      formData.append("price", values.price);
      formData.append("mealType", values.mealType);
      formData.append("validityDays", values.validityDays);
      formData.append("maxTiffins", values.maxTiffins);
      formData.append("description", values.description);
      formData.append("image", values.image);
      dispatch(createPlan(formData));
      setShowForm(false);
      resetForm()
    },
  });
  const editFormik = useFormik({
    initialValues: {
      price: currentPlan?.price || "",
      mealType: currentPlan?.mealType || "",
      description: currentPlan?.description || "",
      validityDays: currentPlan?.validityDays || "",
      maxTiffins:currentPlan?.maxTiffins ||  "",
      image: null,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      price: Yup.number().required("Price is required").positive("Price must be positive"),
      mealType: Yup.string().required("Meal type is required"),
      description: Yup.string().required("Description is required"),
      validityDays: Yup.string().required("validityDays is required"),
      maxTiffins: Yup.string().required("maxTiffins is required"),
      image: Yup.string().required("image is required"),
    
    }),
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("price", values.price);
      formData.append("mealType", values.mealType);
      formData.append("description", values.description);
      formData.append("validityDays", values.validityDays);
      formData.append("maxTiffins", values.maxTiffins);
      
      if (values.image) {
        formData.append("image", values.image);
      }
      dispatch(updatePlan({ planId: currentPlan._id, updatedData : formData }));
    },
  });

  const handlePlanDelete = (deliteId)=>{
        dispatch(deletePlan(deliteId))
  }
   const handleEditClick = (plan) => {
    setCurrentPlan(plan);
  };

  // const notify = () => toast.success("This is a success message!");

  return (
    <div className="p-4">
     <div className="flex justify-between items-center">
     <h2 className="text-2xl font-bold ">Admin Plan Management</h2>

{/* Add Plan Button */}
<button 

  onClick={() => setShowForm(true)}
  className="bg-blue-500 text-white px-4 py-2 rounded mb-3 hover:bg-blue-600"
>
  Add New Plan
</button>
     </div>
     


      {/* Display Existing Plans */}
     

      {/* Add Plan Form */}
      {showForm && (
        <form onSubmit={formik.handleSubmit} className="bg-gray-100 p-4 rounded mt-6">
          <h3 className="text-xl font-semibold mb-4">Add New Plan</h3>

          {/* Price Field */}
          <div className="mb-4">
            <label className="block font-medium ">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              className={`w-full p-2 border rounded ${
                formik.errors.price && formik.touched.price ? "border-red-500" : ""
              }`}
              placeholder="Enter price"
            />
            {formik.errors.price && formik.touched.price && (
              <div className="text-red-500 text-sm">{formik.errors.price}</div>
            )}
          </div>

          {/* Meal Type */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Meal Type</label>
            <input
              type="text"
              name="mealType"
              value={formik.values.mealType}
              onChange={formik.handleChange}
              className={`w-full p-2 border rounded ${
                formik.errors.mealType && formik.touched.mealType ? "border-red-500" : ""
              }`}
              placeholder="Enter meal type"
            />
            {formik.errors.mealType && formik.touched.mealType && (
              <div className="text-red-500 text-sm">{formik.errors.mealType}</div>
            )}
          </div>

          {/* Validity Days */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Validity Days</label>
            <input
              type="number"
              name="validityDays"
              value={formik.values.validityDays}
              onChange={formik.handleChange}
              className={`w-full p-2 border rounded ${
                formik.errors.validityDays && formik.touched.validityDays ? "border-red-500" : ""
              }`}
              placeholder="Enter validity days"
            />
            {formik.errors.validityDays && formik.touched.validityDays && (
              <div className="text-red-500 text-sm">{formik.errors.validityDays}</div>
            )}
          </div>

          {/* Max Tiffins */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Max Tiffins</label>
            <input
              type="number"
              name="maxTiffins"
              value={formik.values.maxTiffins}
              onChange={formik.handleChange}
              className={`w-full p-2 border rounded ${
                formik.errors.maxTiffins && formik.touched.maxTiffins
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Enter max tiffins"
            />
            {formik.errors.maxTiffins && formik.touched.maxTiffins && (
              <div className="text-red-500 text-sm">{formik.errors.maxTiffins}</div>
            )}
          </div>

          {/* Plan Description */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Plan Description</label>
            <textarea
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              className={`w-full p-2 border rounded ${
                formik.errors.description && formik.touched.description
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Enter plan description"
            />
            {formik.errors.description && formik.touched.description && (
              <div className="text-red-500 text-sm">{formik.errors.description}</div>
            )}
          </div>

          {/* Upload Meal Image */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Upload Meal Image</label>
            <input
              type="file"
              name="image"
              onChange={(event) => formik.setFieldValue("image", event.currentTarget.files[0])}
              className={`w-full ${
                formik.errors.image && formik.touched.image ? "border-red-500" : ""
              }`}
            />
            {formik.errors.image && formik.touched.image && (
              <div className="text-red-500 text-sm">{formik.errors.image}</div>
            )}
          </div>

          {/* Submit and Cancel Buttons */}
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
              className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600`}
            >
              Add Plan
            </button>
          </div>
        </form>
      )}

   
     {loading ? (  <div className="flex items-center justify-center h-screen">
      <ClipLoader color="#36d7b7" size={50} />
    </div> ) : ( <div>
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
            {plans.map((plan , i) => (
              <tr key={plan._id}>
                <td className="border p-2 text-center">{i+1}</td>
                <td className="border p-2 text-center">{plan.price}</td>
                <td className="border p-2 text-center">{plan.mealType}</td>
                <td className="border p-2">{plan.description}</td>
                <td className="flex justify-center border p-2 text-center">
                  <img
                    src={`http://localhost:5000/uploads/${plan.image}`.replace(/\\/g, "/")}
                    alt="Plan"
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
               {console.log(`http://localhost:5000/uploads/${plan.image}`)}
                <td className="border p-2 text-center">
                  <button
                  onClick={()=>{ handleEditClick(plan); setShowEditePlan(true)} }
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2 hover:bpg-green-600"
                  >
                    Edit
                  </button>
                  <button 

                  onClick={()=>handlePlanDelete(plan._id)}
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
    </div>)}
     

    {showEditePlan && (
  <div
    onClick={() => setShowEditePlan(false)} 
    className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
  >
    <form
      onClick={(e) => e.stopPropagation()}
      onSubmit={editFormik.handleSubmit}
      className="bg-white p-6 rounded shadow-lg max-h-[80vh] overflow-y-auto"
    >
      <h3 className="text-xl font-semibold mb-4">Edit Plan</h3>

      {/* Price Field */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Price (₹)</label>
        <input
          type="number"
          name="price"
          value={editFormik.values.price}
          onChange={editFormik.handleChange}
          className={`w-full p-2 border rounded ${
            editFormik.errors.price && editFormik.touched.price ? "border-red-500" : ""
          }`}
        />
        {editFormik.errors.price && editFormik.touched.price && (
          <div className="text-red-500 text-sm">{editFormik.errors.price}</div>
        )}
      </div>

      {/* Meal Type Field */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Meal Type</label>
        <input
          type="text"
          name="mealType"
          value={editFormik.values.mealType}
          onChange={editFormik.handleChange}
          className={`w-full p-2 border rounded ${
            editFormik.errors.mealType && editFormik.touched.mealType ? "border-red-500" : ""
          }`}
        />
        {editFormik.errors.mealType && editFormik.touched.mealType && (
          <div className="text-red-500 text-sm">{editFormik.errors.mealType}</div>
        )}
      </div>

      {/* Validity Days Field */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Validity Days</label>
        <input
          type="number"
          name="validityDays"
          value={editFormik.values.validityDays}
          onChange={editFormik.handleChange}
          className={`w-full p-2 border rounded ${
            editFormik.errors.validityDays && editFormik.touched.validityDays ? "border-red-500" : ""
          }`}
        />
        {editFormik.errors.validityDays && editFormik.touched.validityDays && (
          <div className="text-red-500 text-sm">{editFormik.errors.validityDays}</div>
        )}
      </div>

      {/* Max Tiffins Field */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Max Tiffins</label>
        <input
          type="number"
          name="maxTiffins"
          value={editFormik.values.maxTiffins}
          onChange={editFormik.handleChange}
          className={`w-full p-2 border rounded ${
            editFormik.errors.maxTiffins && editFormik.touched.maxTiffins ? "border-red-500" : ""
          }`}
        />
        {editFormik.errors.maxTiffins && editFormik.touched.maxTiffins && (
          <div className="text-red-500 text-sm">{editFormik.errors.maxTiffins}</div>
        )}
      </div>

      {/* Description Field */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Description</label>
        <textarea
          name="description"
          value={editFormik.values.description}
          onChange={editFormik.handleChange}
          className={`w-full p-2 border rounded ${
            editFormik.errors.description && editFormik.touched.description ? "border-red-500" : ""
          }`}
        />
        {editFormik.errors.description && editFormik.touched.description && (
          <div className="text-red-500 text-sm">{editFormik.errors.description}</div>
        )}
      </div>

      {/* Upload Meal Image */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Upload Meal Image</label>
        <input
          type="file"
          name="image"
          onChange={(e) => editFormik.setFieldValue("image", e.currentTarget.files[0])}
          className={`w-full ${
            editFormik.errors.image && editFormik.touched.image ? "border-red-500" : ""
          }`}
        />
        {editFormik.errors.image && editFormik.touched.image && (
          <div className="text-red-500 text-sm">{editFormik.errors.image}</div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowEditePlan(false)}
          type="button"
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


