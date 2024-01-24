import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Check if a token is stored in local storage when the component mounts
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  //   const saveToken = (newToken) => {
  //     // Save the token to both state and local storage
  //     setToken(newToken);
  //     localStorage.setItem('token', newToken);
  //   };

  const removeToken = () => {
    // Remove the token from both state and localstorage
    localStorage.removeItem('token');
    setToken(null);
  };

  // return { token, saveToken, removeToken };
  return { token, removeToken };
};
