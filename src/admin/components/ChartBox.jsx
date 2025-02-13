

import React from "react";

const Dashboard = () => {
  const data = [
    { id: 1, heading: "SingleTiffins With Chapati", count: "100" },
    { id: 1, heading: "SingleTiffins with Bhakar ", count: "100" },
    { id: 2, heading: "Veg Tiffins with Chapati", count: "90" },
    { id: 3, heading: "Veg Tiffins with Bhakar", count: "80" },
    { id: 3, heading: "Non-Veg  Tiffins with Chapati", count: "80" },
    { id: 3, heading: "Non-Veg Tiffins with Bhakar", count: "800" },
    { id: 3, heading: "Total Tiffins", count: "2000" },
  ];

  return (
    <div className="container mx-auto p-4 text-center">
      <table className="w-full border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-gray-200 ">
            <th className="border py-2">NO</th>
            <th className="border px-4 py-2">Heading</th>
            <th className="border px-4 py-2">Count </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="border  py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.heading}</td>
              <td className="border px-4 py-2">{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;




// import React from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// // Register Chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const Dashboard = () => {
//   const data = {
//     labels: ["80", "One Time Veg", "One Time Non-Veg", "Two Time Veg", "Two Time Non-Veg"],
//     datasets: [
//       {
//         label: "Bhakar",
//         data: [10, 50, 30, 40, 20],
//         backgroundColor: "red",
//       },
//       {
//         label: "Chapati",
//         data: [70, 90, 60, 80, 70],
//         backgroundColor: "orange",
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 100,
//       },
//     },
//   };

//   return (
//     <div className="flex flex-col items-center py-2">
//       {/* Main Container */}
//       <div className="flex w-full max-w-7xl border p-4 rounded-lg">
//         {/* Bar Chart Section */}
//         <div className="w-3/4 p-4">
//           <Bar data={data} options={options} />
//         </div>

//         {/* Statistics Section */}
//         <div className="w-1/4 ml-4 bg-gray-700 text-white border border-blue-400 p-4 rounded-lg">
//           <div className="text-right">
//             <p className="font-bold text-lg">Total Tiffin</p>
//             <p className="text-2xl font-extrabold">520</p>
//           </div>

//           <div className="mt-4">
//             <div className="flex justify-between">
//               <p>Bhakar</p>
//               <p className="font-bold">150</p>
//             </div>
//             <div className="flex justify-between">
//               <p>Chapati</p>
//               <p className="font-bold">370</p>
//             </div>
//           </div>

//           <div className="mt-8">
//             <p className="font-bold">Today's all Tiffin</p>
//             <div className="mt-2 space-y-2">
//               <div className="flex justify-between">
//                 <p>80</p>
//                 <p>= 80</p>
//               </div>
//               <div className="flex justify-between">
//                 <p>One Time Veg</p>
//                 <p>= 140</p>
//               </div>
//               <div className="flex justify-between">
//                 <p>One Time Non-Veg</p>
//                 <p>= 90</p>
//               </div>
//               <div className="flex justify-between">
//                 <p>Two Time Veg</p>
//                 <p>= 120</p>
//               </div>
//               <div className="flex justify-between">
//                 <p>Two Time Non-Veg</p>
//                 <p>= 90</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Legends */}
//       {/* <div className="flex mt-4 space-x-6">
//         <div className="flex items-center space-x-2">
//           <div className="w-4 h-4 bg-red-500 rounded-full"></div>
//           <p>Bhakar</p>
//         </div>
//         <div className="flex items-center space-x-2">
//           <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
//           <p>Chapati</p>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default Dashboard;
