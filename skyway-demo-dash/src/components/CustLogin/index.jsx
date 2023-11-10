// CustLogin.js
import React, { useState, useContext } from 'react';
import { readCustomer } from '../../utils/localStorageCRUD';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

function CustLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' }); // Changed from email to username
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const customer = readCustomer(credentials.username); // Change to use username
    
    if (customer && customer.password === credentials.password) {
      // Customer found and password matches
      setUser({ userName: customer.userName, isAdmin: false }); // Update the context with user info
      navigate('/CustDashboard'); // Adjust the path as per your route settings
    } else {
      // Invalid login
      setLoginError('Invalid username or password.'); // Update the error message
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-xs mx-auto bg-white rounded-lg shadow-md p-8">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <h1 className="text-center text-2xl font-bold">Customer Login</h1>
          {loginError && <p className="text-center text-red-500">{loginError}</p>}
      <input
        type="text" // Changed from email to text
        name="username" // Changed from email to username
        value={credentials.username} // Changed from email to username
        onChange={handleChange}
        placeholder="Username" // Changed from Email to Username
        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustLogin;
