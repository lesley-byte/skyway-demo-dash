// utils/localStorageUtil.js
// Save data to Local Storage
export const saveToLocalStorage = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    window.localStorage.setItem(key, serializedValue);
  } catch (err) {
    console.error("Error saving to Local Storage", err);
  }
};

// Load data from Local Storage
export const loadFromLocalStorage = (key) => {
  try {
    const serializedValue = window.localStorage.getItem(key);
    return serializedValue ? JSON.parse(serializedValue) : null;
  } catch (err) {
    console.error("Error loading from Local Storage", err);
    return null;
  }
};

// Remove data from Local Storage
export const removeFromLocalStorage = (key) => {
  try {
    window.localStorage.removeItem(key);
  } catch (err) {
    console.error("Error removing from Local Storage", err);
  }
};
