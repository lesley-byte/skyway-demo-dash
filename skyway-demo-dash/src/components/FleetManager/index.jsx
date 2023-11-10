import React, { useState, useEffect } from 'react';
import {
  addFleetToCustomer,
  removeFleetFromCustomer,
  addDroneToFleetForCustomer,
  removeDroneFromFleetForCustomer,
  getFleetsOfCustomer
} from '../../utils/localStorageCRUD';

function FleetManager({ loggedInUsername }) {
  const [fleets, setFleets] = useState([]);
  const [newFleetName, setNewFleetName] = useState('');
  const [newDroneId, setNewDroneId] = useState('');
  const [selectedFleetId, setSelectedFleetId] = useState('');

  // Load the customer's fleets on component mount
  useEffect(() => {
    fetchFleets();
  }, [loggedInUsername]);

  // Fetch fleets from the local storage
  const fetchFleets = () => {
    const customerFleets = getFleetsOfCustomer(loggedInUsername);
    setFleets(customerFleets);
  };

  // Add fleet handler
  const handleAddFleet = (e) => {
    e.preventDefault();
    addFleetToCustomer(loggedInUsername, { fleetName: newFleetName });
    fetchFleets();
    setNewFleetName('');
  };

  // Add drone handler
  const handleAddDrone = (e) => {
    e.preventDefault();
    addDroneToFleetForCustomer(loggedInUsername, selectedFleetId, newDroneId);
    fetchFleets();
    setNewDroneId('');
  };

  // Remove fleet handler
  const handleRemoveFleet = (fleetId) => {
    removeFleetFromCustomer(loggedInUsername, fleetId);
    fetchFleets();
  };

  // Remove drone handler
  const handleRemoveDrone = (droneId) => {
    removeDroneFromFleetForCustomer(loggedInUsername, selectedFleetId, droneId);
    fetchFleets();
  };

  // Input change handlers
  const handleFleetNameChange = (e) => {
    setNewFleetName(e.target.value);
  };

  const handleDroneIdChange = (e) => {
    setNewDroneId(e.target.value);
  };

  const handleSelectFleet = (e) => {
    setSelectedFleetId(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
        {/* Form for adding new fleet */}
          <form onSubmit={handleAddFleet} className="space-y-4">
            <input
              type="text"
              placeholder="Fleet Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleFleetNameChange}
              value={newFleetName}
            />
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add Fleet
            </button>
          </form>
        </div>

        <div className="mb-6">
          {/* Form for adding a drone to a fleet */}
          <form onSubmit={handleAddDrone} className="space-y-4">
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleSelectFleet}
              value={selectedFleetId}
            >
              <option value="">Select Fleet</option>
              {fleets.map((fleet) => (
                <option key={fleet.fleetId} value={fleet.fleetId}>
                  {fleet.fleetName}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Drone ID"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleDroneIdChange}
              value={newDroneId}
            />
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add Drone
            </button>
          </form>
        </div>

        {/* Display list of fleets and their drones */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Fleets</h2>
           {fleets.map((fleet) => (
          <div key={fleet.fleetId} className="p-4 bg-white my-2 rounded shadow">
            <h3 className="text-lg font-semibold">{fleet.fleetName}</h3>
            <div className="flex items-center justify-between">
              <ul>
                {fleet.drones.map((drone) => (
                  <li key={drone.droneId} className="flex justify-between items-center">
                    Drone ID: {drone.droneId}
                    <button
                      onClick={() => handleRemoveDrone(drone.droneId)}
                      className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleRemoveFleet(fleet.fleetId)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete Fleet
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FleetManager;