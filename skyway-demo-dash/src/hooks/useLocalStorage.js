import { useState } from 'react';

function getStoredValue(key, defaultValue) {
  const saved = localStorage.getItem(key);
  const initial = saved !== null ? JSON.parse(saved) : defaultValue;
  return initial;
}

export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    return getStoredValue(key, defaultValue);
  });

  const setAndStoreValue = (newValue) => {
    try {
      // Allow newValue to be a function so we have the same API as useState
      const valueToStore =
        newValue instanceof Function ? newValue(value) : newValue;
      // Save to local state
      setValue(valueToStore);
      // Save to local storage
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation might handle the error case
      console.log(error);
    }
  };

  return [value, setAndStoreValue];
}
