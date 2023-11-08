import React, { useState } from 'react';
// Import other necessary libraries or components

function AdminLogin() {
  // State for login form (if needed)
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic for admin
  };

  return (
    // Centering the card container on the screen
<div className="w-full flex justify-center items-center h-screen bg-gray-100">
  {/* Card container with rounded border, shadow, and padding */}
  <div className="w-full max-w-xs bg-white rounded-lg shadow-md p-8">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <h1 className="text-center text-2xl font-bold">Admin Login</h1>
          {/* Input fields for username and password with styling */}
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Username"
            className="p-2 border rounded-lg"
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            className="p-2 border rounded-lg"
          />
          {/* Login button with styling */}
          <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;