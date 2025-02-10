import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const MealPreparation = () => {
  const mealOrders = [
    { type: "Veg", item: "Chapati", quantity: 600 },
    { type: "Veg", item: "Bhakri", quantity: 60 },
    { type: "Non-Veg", item: "Chapati", quantity: 90 },
    { type: "Non-Veg", item: "Bhakri", quantity: 10 },
  ];

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Meal Preparation Overview", 14, 10);
    const tableColumn = ["Type", "Meal Item", "Quantity"];
    const tableRows = mealOrders.map(order => [order.type, order.item, order.quantity]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("Meal_Preparation_Overview.pdf");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Meal Preparation Overview</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Type</th>
              <th className="p-2 border">Meal Item</th>
              <th className="p-2 border">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {mealOrders.map((order, index) => (
              <tr key={index} className="text-center border">
                <td className="p-2 border">{order.type}</td>
                <td className="p-2 border">{order.item}</td>
                <td className="p-2 border font-semibold">{order.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={downloadPDF}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};
    
export default MealPreparation;
