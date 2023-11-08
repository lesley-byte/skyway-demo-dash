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
    <nav className="bg-red-800 text-white p-3">
      <ul className="flex justify-between items-center">
        {/* Home link */}
        <li className={`mx-2 hover:bg-gray-700 p-2 rounded ${currentPage === '/' ? 'bg-gray-700' : ''}`} key="Home">
          <Link to="/" className="hover:text-gray-300">Home</Link>
        </li>
        {/* Other navigation links */}
        {pages.map((page) => (
          <li
            className={`mx-2 hover:bg-gray-700 p-2 rounded ${currentPage === `/${page.toLowerCase()}` ? 'bg-gray-700' : ''}`}
            key={page}
          >
            <Link to={`/${page.toLowerCase()}`} className="hover:text-gray-300">{capitalizeFirstLetter(page)}</Link>
          </li>
        ))}
        {/* Dropdown Menu Item */}
        <li className="mx-2 relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={toggleDropdown}
            className="hover:bg-gray-700 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            Login
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
              <Link to="/AdminLogin" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Admin Login</Link>
              <Link to="/CustLogin" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Customer Login</Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
