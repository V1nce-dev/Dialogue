"use client";
import { useEffect, useState } from 'react';

const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return isLoggedIn;
};

export default useIsLoggedIn;
