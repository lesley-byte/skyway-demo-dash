import React, { useState, useEffect, useContext } from 'react';
import {
  addFleetToCustomer,
  removeFleetFromCustomer,
  addDroneToFleetForCustomer,
  removeDroneFromFleetForCustomer,
  getFleetsOfCustomer
} from '../../utils/localStorageCRUD';
import { UserContext } from '../../contexts/UserContext';

function FleetManager() {
  const { user } = useContext(UserContext);
  const loggedInUsername = user?.userName;

  const [fleets, setFleets] = useState([]);
  const [newFleetName, setNewFleetName] = useState('');
  const [newDroneId, setNewDroneId] = useState('');
  const [selectedFleetId, setSelectedFleetId] = useState('');

  // Load the customer's fleets on component mount
useEffect(() => {
  console.log("Fetching fleets for user:", loggedInUsername);
  fetchFleets();
}, [loggedInUsername]);

useEffect(() => {
  console.log("Fleets state after update:", fleets);
}, [fleets]);

// Fetch fleets from the local storage
const fetchFleets = () => {
  const customerFleets = getFleetsOfCustomer(loggedInUsername);
  console.log("Fetched customer fleets:", customerFleets); // Log the fetched fleets
  setFleets(customerFleets);
  // Note: Due to the asynchronous nature of setState, this might not reflect the new state immediately
  console.log("Updated fleets state:", fleets);
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
  console.log(`Removing drone: ${droneId} from fleet: ${selectedFleetId}`);
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
  console.log("Selected Fleet ID:", e.target.value); // Check the selected fleet ID
};


  return (
  <div className="flex justify-center items-start bg-gray-100 px-4 sm:px-6 lg:px-8 py-12 overflow-auto ">
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8 overflow-auto" style={{ maxHeight: 'calc(100vh - 150px)' }}>
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Fleet Manager</h1>
      <h2 className="mb-4">Hello, {loggedInUsername}!</h2>

      {/* Form for adding new fleet */}
      <div className="mb-8">
        <form onSubmit={handleAddFleet} className="grid gap-4">
          <input
            type="text"
            placeholder="Fleet Name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleFleetNameChange}
            value={newFleetName}
          />
          <button
            type="submit"
            className="w-full p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add Fleet
          </button>
        </form>
      </div>

      {/* Form for adding a drone to a fleet */}
      <div className="mb-8">
        <form onSubmit={handleAddDrone} className="grid gap-4">
          <select
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSelectFleet}
            value={selectedFleetId}
          >
            <option value="">Select Fleet</option>
            {fleets.map((fleet) => (
              <option key={fleet.fleetId} value={fleet.fleetId}>{fleet.fleetName}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Drone ID"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleDroneIdChange}
            value={newDroneId}
          />
          <button
            type="submit"
            className="w-full p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add Drone
          </button>
        </form>
      </div>

      {/* Display list of fleets and their drones */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Fleets</h2>
        {fleets.map((fleet) => (
          <div key={fleet.fleetId} className="p-6 bg-white my-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">{fleet.fleetName}</h3>
            <ul className="space-y-3">
              {fleet.drones.map((drone) => (
                <li key={drone.droneId} className="flex justify-between items-center">
                  Drone ID: {drone.droneId}
                  <button
                    onClick={() => handleRemoveDrone(drone.droneId)}
                    className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleRemoveFleet(fleet.fleetId)}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete Fleet
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

export default FleetManager;