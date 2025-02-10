

import React, { useState } from "react";

const SubscriptionDailyOrder = () => {
  const [orders] = useState([
    {
      id: 1,
      userName: "John Doe",
      userMobile: "9876543210",
      address: "123 Main Street, City A",
      mealType: "SingleTiffin Chapati",
      deliveryStatus: "Delivered",
      date: "2024-11-20",
      tiffinCount: 2,
    //   flatbreads: "Chapati",
    },
    {
      id: 2,
      userName: "Jane Smith",
      userMobile: "8765432109",
      address: "456 Oak Avenue, City B",
      mealType: "Non-Veg Tiffin bhakar",
      deliveryStatus: "Pending",
      date: "2024-11-19",
      tiffinCount: 1,
    //   flatbreads: "Bhakri",
    },
    {
      id: 3,
      userName: "Michael Brown",
      userMobile: "7654321098",
      address: "789 Pine Road, City C",
      mealType: "Veg Tiffin bhakar",
      deliveryStatus: "Pending",
      date: "2024-11-18",
      tiffinCount: 3,
    //   flatbreads: "Chapati",
    },
    {
      id: 4,
      userName: "Emily Davis",
      userMobile: "6543210987",
      address: "101 Maple Street, City D",
      mealType: "SingleTiffin bhakar",
      deliveryStatus: "Delivered",
      date: "2024-11-17",
      tiffinCount: 1,
    //   flatbreads: "Bhakri",
    },
    {
      id: 5,
      userName: "Chris Johnson",
      userMobile: "5432109876",
      address: "202 Cedar Lane, City E",
      mealType: "Veg Tiffin chapati",
      deliveryStatus: "Pending",
      date: "2024-11-16",
      tiffinCount: 2,
    //   flatbreads: "Chapati",
    },
    {
      id: 6,
      userName: "Sarah Wilson",
      userMobile: "4321098765",
      address: "303 Elm Street, City F",
      mealType: "Non-Veg Tiffin bhakar",
      deliveryStatus: "Delivered",
      date: "2024-11-15",
      tiffinCount: 1,
    //   flatbreads: "Bhakri",
    },
    {
      id: 7,
      userName: "David Lee",
      userMobile: "3210987654",
      address: "404 Birch Road, City G",
      mealType: "Non-Veg Tiffin bhakar",
      deliveryStatus: "Pending",
      date: "2024-11-14",
      tiffinCount: 2,
    //   flatbreads: "Chapati",
    },
    {
      id: 8,
      userName: "Emma Moore",
      userMobile: "2109876543",
      address: "505 Spruce Drive, City H",
      mealType: "Veg Tiffin bhakar",
      deliveryStatus: "Pending",
      date: "2024-11-13",
      tiffinCount: 3,
    //   flatbreads: "Bhakri",
    },
    {
      id: 9,
      userName: "Liam Harris",
      userMobile: "1098765432",
      address: "606 Aspen Lane, City I",
      mealType: "Veg Tiffin chapati",
      deliveryStatus: "Delivered",
      date: "2024-11-12",
      tiffinCount: 1,
    //   flatbreads: "Chapati",
    },
    {
      id: 10,
      userName: "Olivia Martin",
      userMobile: "0987654321",
      address: "707 Willow Street, City J",
      mealType: "Veg Tiffin bhakar",
      deliveryStatus: "Pending",
      date: "2024-11-11",
      tiffinCount: 2,
    //   flatbreads: "Bhakri",
    },
    {
      id: 11,
      userName: "Ethan White",
      userMobile: "9876501234",
      address: "8 Redwood Road, City K",
      mealType: "Non-Veg Tiffin chapati",
      deliveryStatus: "Delivered",
      date: "2024-11-10",
      tiffinCount: 1,
    //   flatbreads: "Chapati",
    },
    {
      id: 12,
      userName: "Sophia Robinson",
      userMobile: "8765012345",
      address: "909 Cypress Ave, City L",
      mealType: "Veg Tiffin bhakar",
      deliveryStatus: "Pending",
      date: "2024-11-09",
      tiffinCount: 3,
    //   flatbreads: "Bhakri",
    },
    {
      id: 13,
      userName: "Benjamin Walker",
      userMobile: "7650123456",
      address: "1010 Oakwood Lane, City M",
      mealType: "Veg Tiffin chapati",
      deliveryStatus: "Delivered",
      date: "2024-11-08",
      tiffinCount: 2,
    //   flatbreads: "Chapati",
    },
    {
      id: 14,
      userName: "Ava Hall",
      userMobile: "6540123457",
      address: "1111 Pinecrest Road, City N",
      mealType: "Non-Veg Tiffin bhakar",
      deliveryStatus: "Pending",
      date: "2024-11-07",
      tiffinCount: 1,
    //   flatbreads: "Bhakri",
    },
    {
      id: 15,
      userName: "William Allen",
      userMobile: "5430123458",
      address: "1212 Magnolia Blvd, City O",
      mealType: "SingleTiffin chapati",
      deliveryStatus: "Delivered",
      date: "2024-11-06",
      tiffinCount: 2,
    //   flatbreads: "Chapati",
    },
  ]);
  
  const [searchTerm, setSearchTerm] = useState(""); // Added search term state
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState("");
  const [filterMealType, setFilterMealType] = useState("")

  const ordersPerPage = 10;

  // Filter orders based on status
  const filteredOrders = filterStatus  ? orders.filter((order) => order.deliveryStatus === filterStatus || order.mealType === filterStatus ) : orders 

  // Filter orders based on search term
  const searchFilteredOrders = filteredOrders.filter(
    (order) =>
      order.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.userMobile.includes(searchTerm) || order.mealType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(searchFilteredOrders.length / ordersPerPage);
  const startIndex = (currentPage - 1) * ordersPerPage;
  const currentOrders = searchFilteredOrders.slice(startIndex, startIndex + ordersPerPage);

  const handleSearch = () => {
    setCurrentPage(1); // Reset to the first page after search
  };

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-xl font-bold mb-4">SubscriptionDailyOrder Management</h1>

      {/* Search and Filters */}
      <div className="mb-4 flex flex-wrap items-center justify-between">
        <div className="flex space-x-2 w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search by user name, mobile number and mealType"
            className="p-2 border rounded w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Search
          </button>
        </div>
       <div className="flex  gap-4">
       <select
          className="p-2 border rounded w-full  mt-2 md:mt-0"
          value={filterStatus}
          onChange={(e) => {
            setFilterStatus(e.target.value);
            setCurrentPage(1); // Reset to the first page after filtering
          }}
        >
         <option value="">All</option>
          <option value="SingleTiffin Chapati">SingleTiffin Chapati</option>
          <option value="SingleTiffin bhakar">SingleTiffin bhakar</option>
          <option value="Non-Veg Tiffin bhakar">Non-Veg Tiffin bhakar</option>
          <option value="Non-Veg Tiffin chapati">Non-Veg Tiffin chapati</option>
          <option value="Veg Tiffin chapati">Veg Tiffin chapati</option>
          <option value="Veg Tiffin bhakar ">Veg Tiffin bhakar</option>
         
        </select>
        <select
          className="p-2 border rounded w-full  mt-2 md:mt-0"
          value={filterStatus}
          onChange={(e) => {
            setFilterStatus(e.target.value);
            setCurrentPage(1); // Reset to the first page after filtering
          }}
        >
           <option value="">All</option>
          <option value="Delivered">Delivered</option>
          <option value="Pending">Pending</option>
        </select>
       </div>
      </div>

      {/* Scrollable SubscriptionDailyOrder Table */}
      <div className="bg-white rounded-lg shadow overflow-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border border-gray-300">Order ID</th>
              <th className="p-2 border border-gray-300">User Name</th>
              <th className="p-2 border border-gray-300">User Mobile</th>
              <th className="p-2 border border-gray-300">Address </th>
              <th className="p-2 border border-gray-300">Meal Type</th>
              <th className="p-2 border border-gray-300">Delivery Status</th>
              <th className="p-2 border border-gray-300">Tiffin Count</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.id} className="text-center">
                <td className="p-2 border border-gray-300">{order.id}</td>
                <td className="p-2 border border-gray-300">{order.userName}</td>
                <td className="p-2 border border-gray-300">{order.userMobile}</td>
                <td className="p-2 border border-gray-300">{order.address}</td>
                <td className="p-2 border border-gray-300">{order.mealType}</td>
                <td
                  className={`p-2 border border-gray-300 ${
                    order.deliveryStatus === "Delivered"
                      ? "text-green-500"
                      : order.deliveryStatus === "Pending"
                      ? "text-orange-500"
                      : "text-red-500"
                  }`}
                >
                  {order.deliveryStatus}
                </td>
                <td className="p-2 border border-gray-300">{order.tiffinCount}</td>
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
      {/* <MealPreparation/> */}

    </div>
  );
};

export default SubscriptionDailyOrder;








