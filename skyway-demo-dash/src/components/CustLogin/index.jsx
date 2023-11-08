import React, { useState } from 'react';
// Import other necessary libraries or components

function CustLogin() {
  // State for login form (if needed)
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic for customer
  };

   return (
    // Centering the card container on the screen
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Card container with rounded border, shadow, and padding */}
      <div className="w-full max-w-xs mx-auto bg-white rounded-lg shadow-md p-8">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <h1 className="text-center text-2xl font-bold">Customer Login</h1>
          {/* Input fields for email and password with styling */}
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Email"
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
          {/* Login button with styling */}
          <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustLogin;