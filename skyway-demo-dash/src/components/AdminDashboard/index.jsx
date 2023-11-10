import React, { useState, useEffect } from 'react';
import { getAllCustomers } from '../../utils/localStorageCRUD'; // Adjust the import path as necessary

function AdminDashboard() {
  const [customers, setCustomers] = useState([]);

  // Fetch all customer data on component mount
  useEffect(() => {
    const allCustomers = getAllCustomers();
    // Transform the data into the needed format if necessary
    const customerDetails = allCustomers.map(customer => ({
      name: customer.customerName,
      totalFleets: customer.droneFleets.length,
      totalDrones: customer.droneFleets.reduce((acc, fleet) => acc + fleet.drones.length, 0),
    }));
    setCustomers(customerDetails);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-auto bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Admin Dashboard</h1>

      {/* Cards container */}
      <div className="w-full max-w-4xl px-4">
        {/* Cards for each customer */}
        {customers.map((customer, index) => (
          <div key={index} className="bg-white mb-6 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">{customer.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Total Fleets */}
              <div className="p-4 border border-gray-200 rounded-lg">
                <p className="text-md font-semibold text-gray-700">Total Fleets</p>
                <p className="text-lg font-bold text-blue-500">{customer.totalFleets}</p>
              </div>
              {/* Total Drones */}
              <div className="p-4 border border-gray-200 rounded-lg">
                <p className="text-md font-semibold text-gray-700">Total Drones</p>
                <p className="text-lg font-bold text-blue-500">{customer.totalDrones}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
