"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

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
          <button onClick={logout} className="grid">Log Out</button>
        </div>
      ) : (
          <Link href="/authenticate">Login</Link> 
      )}
    </div>
  );
};

export default IsLoggedIn;
