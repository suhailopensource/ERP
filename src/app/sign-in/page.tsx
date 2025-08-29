"use client"

import { useState } from "react";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login attempted", { email, password });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      {/* Card container */}
      <div className="w-[400px] bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          SPARK
        </h2>

        {/* Email input */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Password input */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Login button */}
        <button
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
