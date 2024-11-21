



import { NavLink, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCheckCircle,
  FaChevronDown,
  FaChevronRight,
  FaTruck,
  FaClipboardList,
  FaExclamationCircle,
} from "react-icons/fa";
import "./Sidebar.css"
const Sidebar = () => {
  const currentLocation = useLocation();  // Rename `location` to `currentLocation` to avoid conflict

  return (
    <div className="h-screen bg-gray-800 text-white w-52 sticky top-0 z-50">
      <h2 className="text-xl font-bold p-4">Navigation</h2>
      <ul className="space-y-4 p-4">
        {/* Dashboard Link */}
        <li>
          <NavLink
            to="/admin/"
            className={({ isActive }) =>
              isActive && currentLocation.pathname === "/admin/"
                ? "flex items-center justify-between p-2 rounded bg-gray-700"
                : "flex items-center justify-between p-2"
            }
          >
            {({ isActive }) => (
              <>
                <div className="flex items-center">
                  <FaHome className="mr-2" />
                  <span>Dashboard</span>
                </div>
                {isActive && currentLocation.pathname === "/admin/" ? (
                  <FaChevronDown className="text-sm" />
                ) : (
                  <FaChevronRight className="text-sm" />
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
  <NavLink
    to="/admin/orders"
    className={({ isActive }) =>
      isActive
        ? "flex items-center justify-between p-2 rounded bg-gray-700"
        : "flex items-center justify-between p-2"
    }
  >
    {({ isActive }) => (
      <>
        <div className="flex items-center">
          <FaClipboardList className="mr-2" />
          <span>Orders</span>
        </div>
        {isActive ? (
          <FaChevronDown className="text-sm" />
        ) : (
          <FaChevronRight className="text-sm" />
        )}
      </>
    )}
  </NavLink>
</li>

        {/* Users Link */}
        <li>
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              isActive
                ? "flex items-center justify-between p-2 rounded bg-gray-700"
                : "flex items-center justify-between p-2"
            }
          >
            {({ isActive }) => (
              <>
                <div className="flex items-center">
                  <FaUser className="mr-2" />
                  <span>Users</span>
                </div>
                {isActive ? (
                  <FaChevronDown className="text-sm" />
                ) : (
                  <FaChevronRight className="text-sm" />
                )}
              </>
            )}
          </NavLink>
        </li>

        {/* Delivery Body Link */}
        <li>
          <NavLink
            to="/admin/delivery-boy"
            className={({ isActive }) =>
              isActive
                ? "flex items-center justify-between p-2 rounded bg-gray-700"
                : "flex items-center justify-between p-2"
            }
          >
            {({ isActive }) => (
              <>
                <div className="flex items-center">
                  <FaTruck className="mr-2" />
                  <span>Delivery Boy</span>
                </div>
                {isActive ? (
                  <FaChevronDown className="text-sm" />
                ) : (
                  <FaChevronRight className="text-sm" />
                )}
              </>
            )}
          </NavLink>
        </li>
        

        {/* Plans Link */}
        <li>
          <NavLink
            to="/admin/plans"
            className={({ isActive }) =>
              isActive
                ? "flex items-center justify-between p-2 rounded bg-gray-700"
                : "flex items-center justify-between p-2"
            }
          >
            {({ isActive }) => (
              <>
                <div className="flex items-center">
                  <FaClipboardList className="mr-2" />
                  <span>Plans</span>
                </div>
                {isActive ? (
                  <FaChevronDown className="text-sm" />
                ) : (
                  <FaChevronRight className="text-sm" />
                )}
              </>
            )}
          </NavLink>
        </li>

        {/* Settings Link */}
        <li>
          <NavLink
            to="/admin/settings"
            className={({ isActive }) =>
              isActive
                ? "flex items-center justify-between p-2 rounded bg-gray-700"
                : "flex items-center justify-between p-2"
            }
          >
            {({ isActive }) => (
              <>
                <div className="flex items-center">
                  <FaCheckCircle className="mr-2" />
                  <span>Settings</span>
                </div>
                {isActive ? (
                  <FaChevronDown className="text-sm" />
                ) : (
                  <FaChevronRight className="text-sm" />
                )}
              </>
            )}
          </NavLink>
        </li>

        {/* Complaint Link */}
        <li>
          <NavLink
            to="/admin/complaint"
            className={({ isActive }) =>
              isActive
                ? "flex items-center justify-between p-2 rounded bg-gray-700"
                : "flex items-center justify-between p-2"
            }
          >
            {({ isActive }) => (
              <>
                <div className="flex items-center">
                  <FaExclamationCircle className="mr-2" />
                  <span>Complaints</span>
                </div>
                {isActive ? (
                  <FaChevronDown className="text-sm" />
                ) : (
                  <FaChevronRight className="text-sm" />
                )}
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
