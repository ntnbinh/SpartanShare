import React from "react";
import { useState } from "react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex h-screen bg-blue-100">
      <div className="w-2/3 flex items-center justify-center">
        <img src="/logo.jpg" alt="Logo" className="w-500 h-500" />
      </div>
      <div className="w-px h-full bg-gray-300"></div>
      <div className="w-1/5 p-8 ml-auto mr-auto my-auto">
        <h1 className="text-4xl text-center font-bold mb-6">Create Your Account</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">SJSU Email address</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <EnvelopeIcon className="h-5 w-5 text-blue-700"></EnvelopeIcon>
              </span>
              <input type="email"
                placeholder="email@sjsu.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 p-2 border border-gray-400 rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Enter Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockClosedIcon className="h-5 w-5 text-blue-700"></LockClosedIcon>
              </span>
              <input type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 p-2 border border-gray-400 rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockClosedIcon className="h-5 w-5 text-blue-700"></LockClosedIcon>
              </span>
              <input type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 p-2 border border-gray-400 rounded-md"
              />
            </div>
          </div>

          <button type="submit"
            className="w-full mt-3 p-2 bg-blue-600 border text-white border-gray-100 rounded-md hover:bg-blue-700 font-semibold"
          >Create Account</button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300"></hr>
          <span className="px-2 text-black">OR</span>
          <hr className="flex-grow border-gray-300"></hr>
        </div>
        
        <p className="text-center mt-4">Already have an account?{" "}
          <a href="/login" className="text-blue-600 underline">Log in here</a>
        </p>
      </div>
    </div>
  );

}