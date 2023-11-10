// localStorageCRUD.js

// Create a new customer
export const createCustomer = (customer) => {
  const customers = JSON.parse(localStorage.getItem("customers")) || [];
  customer.droneFleets = []; // Initialize customer with an empty array of drone fleets
  customers.push(customer);
  localStorage.setItem("customers", JSON.stringify(customers));
};

// Read a customer by username
export const readCustomer = (username) => {
  const customers = JSON.parse(localStorage.getItem("customers")) || [];
  return customers.find((customer) => customer.userName === username);
};

// Update a customer's details
export const updateCustomer = (username, updatedDetails) => {
  const customers = JSON.parse(localStorage.getItem("customers")) || [];
  const updatedCustomers = customers.map((customer) =>
    customer.userName === username
      ? { ...customer, ...updatedDetails }
      : customer
  );
  localStorage.setItem("customers", JSON.stringify(updatedCustomers));
};

// Delete a customer
export const deleteCustomer = (username) => {
  const customers = JSON.parse(localStorage.getItem("customers")) || [];
  const updatedCustomers = customers.filter(
    (customer) => customer.userName !== username
  );
  localStorage.setItem("customers", JSON.stringify(updatedCustomers));
};

// Get all customers for admin
export const getAllCustomers = () => {
  return JSON.parse(localStorage.getItem("customers")) || [];
};

// Add a new fleet to a customer
export const addFleetToCustomer = (username, newFleet) => {
  const customers = JSON.parse(localStorage.getItem("customers")) || [];
  const updatedCustomers = customers.map((customer) => {
    if (customer.userName === username) {
      const fleetId = `FD${Math.random().toString(16).slice(2)}`; // Generate a random fleet ID
      const fleet = { ...newFleet, fleetId, drones: [] }; // Initialize with empty drones array
      const droneFleets = [...customer.droneFleets, fleet];
      return { ...customer, droneFleets };
    }
    return customer;
  });
  localStorage.setItem("customers", JSON.stringify(updatedCustomers));
};

// Get fleets of a specific customer
export const getFleetsOfCustomer = (username) => {
  const customer = readCustomer(username);
  return customer ? customer.droneFleets : [];
};

// Add a drone to a specific fleet of a customer
export const addDroneToFleetForCustomer = (username, fleetId, droneId) => {
  const customers = JSON.parse(localStorage.getItem("customers")) || [];
  const updatedCustomers = customers.map((customer) => {
    if (customer.userName === username) {
      const updatedFleets = customer.droneFleets.map((fleet) => {
        if (fleet.fleetId === fleetId) {
          const newDrone = { droneId };
          const drones = [...fleet.drones, newDrone];
          return { ...fleet, drones };
        }
        return fleet;
      });
      return { ...customer, droneFleets: updatedFleets };
    }
    return customer;
  });
  localStorage.setItem("customers", JSON.stringify(updatedCustomers));
};

// Update a fleet for a customer
export const updateFleetForCustomer = (username, fleetId, updatedFleetData) => {
  const customers = JSON.parse(localStorage.getItem("customers")) || [];
  const updatedCustomers = customers.map((customer) => {
    if (customer.userName === username) {
      const updatedFleets = customer.droneFleets.map((fleet) =>
        fleet.fleetId === fleetId ? { ...fleet, ...updatedFleetData } : fleet
      );
      return { ...customer, droneFleets: updatedFleets };
    }
    return customer;
  });
  localStorage.setItem("customers", JSON.stringify(updatedCustomers));
};

// Remove a fleet from a customer
export const removeFleetFromCustomer = (username, fleetId) => {
  const customers = JSON.parse(localStorage.getItem("customers")) || [];
  const updatedCustomers = customers.map((customer) => {
    if (customer.userName === username) {
      const filteredFleets = customer.droneFleets.filter(
        (fleet) => fleet.fleetId !== fleetId
      );
      return { ...customer, droneFleets: filteredFleets };
    }
    return customer;
  });
  localStorage.setItem("customers", JSON.stringify(updatedCustomers));
};

// Remove a drone from a specific fleet of a customer
export const removeDroneFromFleetForCustomer = (username, fleetId, droneId) => {
  const customers = JSON.parse(localStorage.getItem("customers")) || [];
  const updatedCustomers = customers.map((customer) => {
    if (customer.userName === username) {
      const updatedFleets = customer.droneFleets.map((fleet) => {
        if (fleet.fleetId === fleetId) {
          const filteredDrones = fleet.drones.filter(
            (drone) => drone.droneId !== droneId
          );
          return { ...fleet, drones: filteredDrones };
        }
        return fleet;
      });
      return { ...customer, droneFleets: updatedFleets };
    }
    return customer;
  });
  localStorage.setItem("customers", JSON.stringify(updatedCustomers));
};
