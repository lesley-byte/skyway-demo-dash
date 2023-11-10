// SignupPage.js
import React, { useState } from 'react';
import { createCustomer, getAllCustomers } from '../../utils/localStorageCRUD';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [newCustomer, setNewCustomer] = useState({
    customerName: '',
    userName: '',
    email: '',
    password: '',
    droneFleets: [] // Assuming a customer starts with no fleets
  });
  const navigate = useNavigate();
  const [signupError, setSignupError] = useState('');

  // Checks if the email and userName are unique among all customers
  const isUnique = (email, userName) => {
    const allCustomers = getAllCustomers();
    return !allCustomers.some(customer => customer.email === email || customer.userName === userName);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Check for uniqueness before creating a new customer
    if (isUnique(newCustomer.email, newCustomer.userName)) {
      createCustomer(newCustomer); // Create the new customer
      navigate('/custlogin'); // Redirect to customer login page after successful signup
    } else {
      setSignupError('Username or email already exists.'); // Show error if not unique
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewCustomer(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSignup} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <input
          type="text"
          name="customerName"
          value={newCustomer.customerName}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="mb-4 p-3 rounded bg-gray-200"
        />
        <input
          type="text"
          name="userName"
          value={newCustomer.userName}
          onChange={handleChange}
          placeholder="Username"
          required
          className="mb-4 p-3 rounded bg-gray-200"
        />
        <input
          type="email"
          name="email"
          value={newCustomer.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="mb-4 p-3 rounded bg-gray-200"
        />
        <input
          type="password"
          name="password"
          value={newCustomer.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="mb-4 p-3 rounded bg-gray-200"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Sign Up
        </button>
        {signupError && <p className="text-red-500 text-xs italic">{signupError}</p>}
      </form>
    </div>
  );
};

export default SignupPage;
