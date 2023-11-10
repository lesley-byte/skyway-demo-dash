import React, { createContext, useState, useEffect } from "react";

// Create the context
export const UserContext = createContext(null);

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // Potentially retrieve user information from local storage or an API on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedIsAdmin = localStorage.getItem("isAdmin") === "true"; // Example, as you wouldn't store this insecurely

    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAdmin(storedIsAdmin);
    }
  }, []);

  // Anytime the user changes, update local storage or handle side effects
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isAdmin", isAdmin);
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("isAdmin");
    }
  }, [user, isAdmin]);

  return (
    <UserContext.Provider value={{ user, setUser, isAdmin, setIsAdmin }}>
      {children}
    </UserContext.Provider>
  );
};
