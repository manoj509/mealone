


import { useState } from "react";

const DeliveryBoyAssign = () => {
    const [selectedZones, setSelectedZones] = useState([]);
    const [assignments, setAssignments] = useState({});
    const [deliveryZones, setDeliveryZones] = useState(["Kranti Chowk", "TV Center", "Cidco"]);
    const [newZone, setNewZone] = useState("");
    const [showZoneModal, setShowZoneModal] = useState(false);
    const [showDeleteZoneModal, setShowDeleteZoneModal] = useState(false);

    const deliveryBoys = [
        { id: 1, name: "Ravi Kumar", available: true },
        { id: 2, name: "Amit Sharma", available: false },
        { id: 3, name: "Vikram Singh", available: true },
    ];

    // Assign zones to a delivery boy
    const handleAssign = (boyId) => {
        setAssignments((prev) => ({
            ...prev,
            [boyId]: prev[boyId] ? [...new Set([...prev[boyId], ...selectedZones])] : [...selectedZones],
        }));
    };

    // Add a new zone
    const handleAddZone = () => {
        if (newZone.trim() !== "" && !deliveryZones.includes(newZone)) {
            setDeliveryZones([...deliveryZones, newZone]);
            setNewZone("");
            setShowZoneModal(false);
        }
    };

    // Delete a zone
    const handleDeleteZone = (zone) => {
        setDeliveryZones(deliveryZones.filter((z) => z !== zone));
    };

    // Remove an assigned zone from a delivery boy
    const handleRemoveAssignedZone = (boyId, zone) => {
        setAssignments((prev) => {
            const updatedZones = prev[boyId]?.filter((z) => z !== zone) || [];
            return updatedZones.length ? { ...prev, [boyId]: updatedZones } : { ...prev, [boyId]: undefined };
        });
    };

    // Select or deselect a zone
    const handleZoneSelection = (zone) => {
        setSelectedZones((prev) =>
            prev.includes(zone) ? prev.filter((z) => z !== zone) : [...prev, zone]
        );
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Delivery Boy Assignment</h2>

            {/* Zone Selection */}
            <div className="mb-4 p-4 border rounded-lg shadow">
                <label className="block text-sm font-medium mb-2">Select Delivery Zones</label>
                <div className="flex flex-wrap gap-2">
                    {deliveryZones.map((zone) => (
                        <button
                            key={zone}
                            className={`px-4 py-2 border rounded-lg ${selectedZones.includes(zone) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            onClick={() => handleZoneSelection(zone)}
                        >
                            {zone}
                        </button>
                    ))}
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg" onClick={() => setShowZoneModal(true)}>+ Add Zone</button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg" onClick={() => setShowDeleteZoneModal(true)}>- Delete Zone</button>
                </div>
            </div>

            {/* Delivery Boy List */}
            <div className="p-4 border rounded-lg shadow">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 border">Delivery Boy</th>
                            <th className="p-2 border">Assigned Zones</th>
                            <th className="p-2 border">Availability</th>
                            <th className="p-2 border">Actions</th>
                            <th className="p-2 border">Orders</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deliveryBoys.map((boy) => (
                            <tr key={boy.id} className="text-center">
                                <td className="p-2 border">{boy.name}</td>
                                <td className="p-2 border">{assignments[boy.id] ? assignments[boy.id].join(", ") : "Unassigned"}</td>
                                <td className={`p-2 border ${boy.available ? 'text-green-600' : 'text-red-600'}`}>
                                    {boy.available ? "Online" : "Offline"}
                                </td>
                                <td className="p-2 border flex gap-2 justify-center">
                                    {/* Assign Button */}
                                    <button
                                        className={`px-4 py-2 rounded-lg text-white font-semibold transition duration-300 ${
                                            !boy.available || selectedZones.length === 0
                                                ? "bg-gray-400 cursor-not-allowed"
                                                : "bg-green-500 hover:bg-green-600"
                                        }`}
                                        onClick={() => handleAssign(boy.id)}
                                        disabled={!boy.available || selectedZones.length === 0}
                                    >
                                        Assign
                                    </button>

                                    {/* Remove Zone Dropdown Button */}
                                    <div className="relative group">
                                        <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
                                            Remove Zone
                                        </button>
                                        <div className="absolute z-30 left-0 mt-1 w-40 bg-white border shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {assignments[boy.id]?.map((zone) => (
                                                <button
                                                    key={zone}
                                                    className="block px-4 py-2 text-left w-full hover:bg-gray-200"
                                                    onClick={() => handleRemoveAssignedZone(boy.id, zone)}
                                                >
                                                    {zone} remove 
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 border">
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                                        Orders
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add Zone Modal */}
            {showZoneModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-lg font-medium mb-4">Add New Zone</h3>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-lg mb-4"
                            placeholder="Enter zone name"
                            value={newZone}
                            onChange={(e) => setNewZone(e.target.value)}
                        />
                        <div className="flex justify-end gap-2">
                            <button className="px-4 py-2 bg-gray-400 text-white rounded-lg" onClick={() => setShowZoneModal(false)}>Cancel</button>
                            <button className="px-4 py-2 bg-green-500 text-white rounded-lg" onClick={handleAddZone}>Add Zone</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Zone Modal */}
            {showDeleteZoneModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-lg font-medium mb-4">Delete Zone</h3>
                        <ul className="mb-4">
                            {deliveryZones.map((zone) => (
                                <li key={zone} className="flex justify-between p-2 border rounded-lg mb-2">
                                    {zone}
                                    <button className="px-3 py-1 bg-red-500 text-white rounded-lg" onClick={() => handleDeleteZone(zone)}>Delete</button>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-end">
                            <button className="px-4 py-2 bg-gray-400 text-white rounded-lg" onClick={() => setShowDeleteZoneModal(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeliveryBoyAssign;






