import React, { useState, useEffect, useContext } from 'react';
import FleetManager from '../FleetManager'; // Adjust the import path as necessary
import { readCustomer } from '../../utils/localStorageCRUD'; // Adjust the import path as necessary
import { UserContext } from '../../contexts/UserContext';


function CustDashboard() {
  const { user } = useContext(UserContext);
  const loggedInUsername = user?.userName;
  const [customerFleets, setCustomerFleets] = useState([]);

  // Retrieve the customer's fleets on component mount
  useEffect(() => {
    const customerData = readCustomer(loggedInUsername);
    if (customerData && customerData.droneFleets) {
      setCustomerFleets(customerData.droneFleets);
    }
  }, [loggedInUsername]); // Dependency array to ensure this runs only when the username changes

  return (
    <div className="flex flex-col justify-center items-center h-screen overflow-auto bg-gray-100 p-4">
      <p className="text-2xl font-bold text-gray-700 mb-6">Customer Dashboard</p>
      <h2> Hello, {loggedInUsername}! </h2>
      <div className="w-full max-w-4xl">
        {customerFleets.length > 0 ? (
          customerFleets.map((fleet) => (
            <div key={fleet.fleetId} className="bg-white mb-4 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900">{fleet.fleetName}</h3>
              <p className="text-sm font-medium text-gray-800">Fleet ID: {fleet.fleetId}</p>
              <div>
                <span className="text-sm font-medium text-gray-800">Drones: </span>
                {fleet.drones.length > 0 ? (
                  <ul>
                    {fleet.drones.map((drone) => (
                      <li key={drone.droneId}>{drone.droneId}</li>
                    ))}
                  </ul>
                ) : (
                  <span>No drones assigned</span>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No fleets to display</p>
        )}
      </div>
    </div>
  );
}

export default CustDashboard;
