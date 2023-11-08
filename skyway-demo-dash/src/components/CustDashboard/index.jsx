function CustDashboard() {
  // Mock data for drone fleets
  const droneFleets = [
    { fleetId: 'FD123', fleetName: 'Alpha', numberOfDrones: 10 },
    { fleetId: 'FD124', fleetName: 'Bravo', numberOfDrones: 15 },
    { fleetId: 'FD125', fleetName: 'Charlie', numberOfDrones: 8 },
    // ... more fleets
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 p-4">
      <p className="text-2xl font-bold text-gray-700 mb-6">Customer Dashboard</p>
      <div className="w-full max-w-4xl">
        {/* Iterating over the droneFleets array to display each fleet as a card */}
        {droneFleets.map((fleet, index) => (
          <div key={index} className="bg-white mb-4 p-6 rounded-lg shadow-md flex justify-between items-center">
            <span className="text-sm font-medium text-gray-800">Fleet ID: {fleet.fleetId}</span>
            <span className="text-lg font-bold text-gray-900">{fleet.fleetName}</span>
            <span className="text-sm font-medium text-gray-800">Drones: {fleet.numberOfDrones}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustDashboard;
