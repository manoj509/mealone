import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserDashboard from "./UserDashboard";

const Profile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
      <>
        {/* <PublicNavbar isFalse={true} /> */}
        <div className="min-h-screen bg-gray-50 flex flex-col">
          {/* Header */}
          <header className="bg-teal-600 text-white py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">
              <div>
                <h1 className="text-xl font-bold">Manoj Dakle</h1>
                <p className="text-sm">7620203121 • manojdakle2002@gmail.com</p>
              </div>
              {/* Hamburger Button */}
              <button
                className="block md:hidden bg-teal-700 p-2 rounded text-white"
                onClick={toggleSidebar}
              >
                ☰
              </button>
              <button className="hidden md:block bg-white text-teal-600 px-4 py-2 rounded-lg text-sm shadow-md font-semibold hover:bg-gray-100">
                Edit Profile
              </button>
            </div>
          </header>

          <div className="container mx-auto flex flex-col md:flex-row mt-6 gap-6 px-4">
            {/* Sidebar */}
            <aside
              className={`fixed top-0 left-0 h-full w-54 bg-white shadow-md p-4 z-50 transform ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 md:relative md:translate-x-0 md:w-1/7`}
            >
              <button
                className="block md:hidden bg-gray-200 text-gray-700 px-4 py-2 rounded mb-4"
                onClick={toggleSidebar}
              >
                Close
              </button>
              <ul className="space-y-4">
                <SidebarItem to="plan" icon="📄" text="Your Plan" />
                <SidebarItem to="MealOne" icon="⭐" text="MealOne" />
                <SidebarItem to="favourites" icon="❤️" text="Favourites" />
                <SidebarItem to="payments" icon="💳" text="Payments" />
                <SidebarItem to="addresses" icon="📍" text="Addresses" />
                <SidebarItem to="settings" icon="⚙️" text="Settings" />
              </ul>
            </aside>

            {/* Overlay for mobile when sidebar is open */}
            {isSidebarOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                onClick={toggleSidebar}
              ></div>
            )}

            {/* Content Section */}
            <section className="flex-1 bg-white shadow-md rounded-lg p-6">
              <Routes>
                <Route path="plan" element={<PlanPage />} />
                <Route path="MealOne" element={<MealOne />} />
                <Route path="favourites" element={<FavouritesPage />} />
                <Route path="payments" element={<PaymentsPage />} />
                <Route path="addresses" element={<AddressesPage />} />
                <Route path="settings" element={<SettingsPage />} />
              </Routes>
            </section>
          </div>
        </div>
      </>
  );
};

const SidebarItem = ({ to, icon, text }) => (
  <li>
    <Link
      to={to}
      className="flex items-center gap-4 p-3 rounded-lg cursor-pointer hover:bg-gray-100 text-gray-700"
    >
      <span className="text-xl">{icon}</span>
      <span className="text-sm font-medium">{text}</span>
    </Link>
  </li>
);

// Example Components for Routes
const PlanPage = () => (
  <div>
    <h2 className="text-lg font-bold">Your Plan page</h2>
      <UserDashboard/>
  </div>
);

const MealOne = () => (
  <div>
    <h2 className="text-lg font-bold">MealOne One Page</h2>
    <p>Details about Mealone One subscription.</p>
  </div>
);

const FavouritesPage = () => (
  <div>
    <h2 className="text-lg font-bold">Favourites Page</h2>
    <p>Here are your favourite items.</p>
  </div>
);

const PaymentsPage = () => (
  <div>
    <h2 className="text-lg font-bold">Payments Page</h2>
    <p>Manage your payment options.</p>
  </div>
);

const AddressesPage = () => (
  <div>
    <h2 className="text-lg font-bold">Addresses Page</h2>
    <p>Manage your saved addresses.</p>
  </div>
);

const SettingsPage = () => (
  <div>
    <h2 className="text-lg font-bold">Settings Page</h2>
    <p>Adjust your settings here.</p>
  </div>
);

export default Profile;
