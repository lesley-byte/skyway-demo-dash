import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav({ currentPage }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown container
  const pages = ['AdminDashboard', 'contact', 'CustDashboard', 'about'];

  // Function to toggle dropdown visibility
  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  // Function to close dropdown if click is outside of dropdown container
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Attach an event listener to the document
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Remove the event listener when the component is unmounted
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-blue-800 text-white p-3 shadow-md">
      <ul className="flex justify-between items-center">
        {/* Home link */}
        <li className={`mx-2 hover:bg-blue-700 p-2 rounded ${currentPage === '/' ? 'bg-blue-700' : ''}`}>
          <Link to="/" className="hover:text-gray-300 text-lg">Home</Link>
        </li>
        {/* Other navigation links */}
        {pages.map((page) => (
          <li
            className={`mx-2 hover:bg-blue-700 p-2 rounded ${currentPage === `/${page.toLowerCase()}` ? 'bg-blue-700' : ''}`}
            key={page}
          >
            <Link to={`/${page.toLowerCase()}`} className="hover:text-gray-300 text-lg">{capitalizeFirstLetter(page)}</Link>
          </li>
        ))}
        {/* Dropdown Menu Item */}
        <li className="mx-2 relative">
          <button
            type="button"
            onClick={toggleDropdown}
            className="hover:bg-blue-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300 text-lg"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            Login
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-50">
              <Link to="/AdminLogin" className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100">Admin Login</Link>
              <Link to="/CustLogin" className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100">Customer Login</Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;