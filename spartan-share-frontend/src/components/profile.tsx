import React, { useState } from "react";

export default function Profile() {
  const [bio, setBio] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-6xl font-bold text-blue-700 mb-3 text-center">Edit Profile</h2>
      <hr className="mb-6 border border-blue-200"></hr>

      <div className="mb-4">
        <p className="text-xl font-semibold inline-block w-16">Name:</p>
        <span className="text-xl">John Doe</span>
      </div>

      <div className="mb-4">
        <p className="text-xl font-semibold inline-block w-16">Email:</p>
        <span className="text-xl">John.Doe@sjsu.edu</span>
      </div>

      <div className="mb-6 flex items-start">
        <label className="text-xl font-semibold flex-shrink-0 w-28">Biography:</label>
        <textarea 
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full h-44 p-2 border border-gray-400 rounded resize-none">
          </textarea>
      </div>

      <div className="flex justify-center">
        <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 shadow">Save Changes</button>
      </div>

    </div>
  );
}