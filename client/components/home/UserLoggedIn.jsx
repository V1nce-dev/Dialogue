"use client";
import { useEffect, useState } from "react";

const IsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkToken = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    checkToken();
    window.addEventListener("storage", checkToken);
    return () => window.removeEventListener("storage", checkToken);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <span>You are logged in</span>
          <button onClick={logout} className="grid">Log Out</button>
        </div>
      ) : (
        <span>Please log in</span>
      )}
    </div>
  );
};

export default IsLoggedIn;
