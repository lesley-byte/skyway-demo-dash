import { useState, useRef, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext"; // Assuming you have a UserContext
import { useNavigate } from "react-router-dom";

function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, setUser, isAdmin, setIsAdmin } = useContext(UserContext); // Using useContext to access user and isAdmin state

  // Function to toggle dropdown visibility
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  // Function to close dropdown if click is outside of dropdown container
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const navigate = useNavigate();

  // Logout function
  const logout = () => {
    // Remove user-related data from local storage or cookies
    localStorage.removeItem("user");
    localStorage.removeItem("isAdmin");

    // Update context
    setUser(null);
    setIsAdmin(false);

    // Redirect to the home page or login page
    navigate("/"); // Adjust the path as needed
  };

  useEffect(() => {
    // Attach an event listener to the document
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove the event listener when the component is unmounted
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
<nav className="bg-blue-800 text-white p-3 shadow-md">
  <ul className="flex flex-col md:flex-row justify-between items-center">
        <li className="mx-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-700 p-2 rounded text-lg flex items-center"
                : "hover:bg-blue-700 p-2 rounded text-lg flex items-center"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              width="48"
              height="48"
              className="flex-shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </NavLink>
        </li>

        {user && isAdmin && (
          <li className="mx-2">
            <NavLink
              to="/AdminDashboard"
              className={({ isActive }) =>
                isActive
                ? "bg-blue-700 p-2 rounded text-lg"
                : "hover:bg-blue-700 p-2 rounded text-lg md:text-base"
              }
            >
              Admin Dashboard
            </NavLink>
          </li>
        )}

        {user && !isAdmin && (
          <li className="mx-2">
            <NavLink
              to="/CustDashboard"
              className={({ isActive }) =>
                isActive
                ? "bg-blue-700 p-2 rounded text-lg"
                : "hover:bg-blue-700 p-2 rounded text-lg md:text-base"
              }
            >
              Customer Dashboard
            </NavLink>
          </li>
        )}
        {user && !isAdmin && (
          <li className="mx-2">
            <NavLink
              to="/FleetManager"
              className={({ isActive }) =>
                isActive
                ? "bg-blue-700 p-2 rounded text-lg"
                : "hover:bg-blue-700 p-2 rounded text-lg md:text-base"
              }
            >
              Fleet Manager
            </NavLink>
          </li>
        )}

        <li className="mx-2">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
              ? "bg-blue-700 p-2 rounded text-lg"
              : "hover:bg-blue-700 p-2 rounded text-lg md:text-base"
            }
          >
            About
          </NavLink>
        </li>

        <li className="mx-2">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
              ? "bg-blue-700 p-2 rounded text-lg"
              : "hover:bg-blue-700 p-2 rounded text-lg md:text-base"
            }
          >
            Contact
          </NavLink>
        </li>

        {!user && (
          <li className="mx-2 relative">
            <button
              onClick={toggleDropdown}
              className="hover:bg-blue-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300 text-lg"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              Login/Signup
            </button>
            {dropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-50"
              >
                <NavLink
                  to="/adminLogin"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-sm text-gray-800 bg-blue-100"
                      : "block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100"
                  }
                >
                  Admin Login
                </NavLink>
                <NavLink
                  to="/custLogin"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-sm text-gray-800 bg-blue-100"
                      : "block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100"
                  }
                >
                  Customer Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-sm text-gray-800 bg-blue-100"
                      : "block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100"
                  }
                >
                  Sign Up
                </NavLink>
              </div>
            )}
          </li>
        )}

        {user && (
          <li className="mx-2">
            <button
              onClick={logout}
              className="hover:bg-blue-700 p-2 rounded text-lg"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

// Helper function outside of the component
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Nav;
