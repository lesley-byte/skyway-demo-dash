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
    <div className="flex justify-center items-center h-screen overflow-auto bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <form onSubmit={handleSignup} className="flex flex-col space-y-4">
          <h1 className="text-center text-2xl font-bold">Sign Up</h1>
          {signupError && <p className="text-center text-red-500">{signupError}</p>}
          <input
            type="text"
            name="customerName"
            value={newCustomer.customerName}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="p-2 border rounded-lg"
          />
          <input
            type="text"
            name="userName"
            value={newCustomer.userName}
            onChange={handleChange}
            placeholder="Username"
            required
            className="p-2 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            value={newCustomer.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="p-2 border rounded-lg"
          />
          <input
            type="password"
            name="password"
            value={newCustomer.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="p-2 border rounded-lg"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;