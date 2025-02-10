import React, { useState } from 'react';

const Navbar = ({ setActiveComponent }) => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <h1 className="text-lg font-bold">Admin Panel</h1>
      <div>
        <button className="mr-4" onClick={() => setActiveComponent('settings')}>delivery time</button>
        <button onClick={() => setActiveComponent('Customize')}>Customize</button>
      </div>
    </nav>
  );
};

const Settings = () => {
  const [timings, setTimings] = useState({
    lunch: "12:00 PM",
    dinner: "08:00 PM",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTimings((prevTimings) => ({
      ...prevTimings,
      [name]: value,
    }));
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Delivery Timing</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Lunch Timing:</label>
          <input
            type="time"
            name="lunch"
            value={timings.lunch}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Dinner Timing:</label>
          <input
            type="time"
            name="dinner"
            value={timings.dinner}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [timings, setTimings] = useState({
    lunch: "12:00 PM",
    dinner: "08:00 PM",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTimings((prevTimings) => ({
      ...prevTimings,
      [name]: value,
    }));
  };
  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
    <h2 className="text-xl font-bold mb-4">Customize Timing</h2>
    <div className="space-y-4">
      <div>
        <label className="block text-gray-700">Lunch Timing:</label>
        <input
          type="time"
          name="lunch"
          value={timings.lunch}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Dinner Timing:</label>
        <input
          type="time"
          name="dinner"
          value={timings.dinner}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </div>
  </div>
  );
};

export default function AdminPanel() {
  const [activeComponent, setActiveComponent] = useState('settings');

  return (
    <div>
      <Navbar setActiveComponent={setActiveComponent} />
      <div className="mt-4">
        {activeComponent === 'settings' && <Settings />}
        {activeComponent === 'Customize' && <Contact />}
      </div>
    </div>
  );
}
