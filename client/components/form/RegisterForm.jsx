"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://dialogue-api.vercel.app/api/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: username, password: password }),
        }
      );

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message);
      }

      router.push("/authenticate");
      setUsername("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md p-8 m-4 rounded border border-[#21262d]">
        <form onSubmit={handleSubmit}>
          <h1 className="block w-full text-center text-2xl mb-6">Register</h1>
          <div className="flex flex-col mb-4">
            <span className="mb-2 font-bold text-lg">Username</span>
            <input
              type="text"
              placeholder="Username"
              className="px-3 py-2 border border-[#21262d] bg-black rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-6">
            <span className="mb-2 font-bold text-lg">Password</span>
            <input
              type="password"
              placeholder="Password"
              className="px-3 py-2 border border-[#21262d] bg-black rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="block w-full bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded"
            type="submit"
          >
            Register
          </button>
          {error && <p className="mt-3 text-red-500">{error}</p>}

          <p className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/authenticate"
              className="text-blue-500 hover:text-blue-800 underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
