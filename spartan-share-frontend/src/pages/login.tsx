import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { email, password };

    try {
      const response = await fetch("http://localhost:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("access_token", result.access_token);
        localStorage.setItem("refresh_token", result.refresh_token);
        console.log("login success");
      } 
      else {
        console.log("login failed. try again")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen bg-blue-100">
      {/* Please input our logo over here */}
      <div className="w-2/3 flex items-center justify-center">
        <img src="/logo.jpg" alt="Logo" className="w-[500px] h-[500px]" />
      </div>
      <div className="w-px h-full bg-gray-300"></div>
      <div className="w-1/ p-8 ml-auto mr-auto my-auto">
        <h1 className="text-5xl text-center font-bold mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="email"
            placeholder="Email"
            className="w-full p-2 mb-3 border border-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="password"
            placeholder="Password"
            className="w-full p-2 mb-3 border border-gray-400 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="w-full p-2 bg-gray-200 border border-gray-400 text-black rounded hover:bg-gray-300">Login</button>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-black">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button type="submit" className="w-full p-2 bg-gray-200 border border-gray-400 text-black rounded hover:bg-gray-300">Create New Account</button>
        </form>
      </div>
    </div>
  )
}