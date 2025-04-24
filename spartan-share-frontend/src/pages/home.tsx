import React, { useState } from "react";
import Link from "next/link";
import Profile from "../components/profile";
import MyProjects from "../components/myprojects";
import BrowseProjects from "../components/browseprojects";

export default function Home() {
  const [selected, setSelected] = useState("projects");

  const renderContent = () => {
    switch (selected) {
      case "profile":
        return <Profile></Profile>;
      case "my-projects":
        return <MyProjects></MyProjects>;
      case "projects":
        return <BrowseProjects></BrowseProjects>;
      case "saved-projects":
        return <div className="text-xl">Saved Projects content here</div>;
      case "applications":
        return <div className="text-xl">Applications content here</div>;
      default:
        return <div className="text-xl">*content</div>;
    }
  };

  return (
    <div className="flex h-screen">
      
      <aside className="w-96 bg-sky-200 flex flex-col justify-between">
        <div>

          <div className="px-6 py-8">
            <img src="/logo.jpg" alt="Logo" className="mx-auto w-40"></img>
          </div>

          <nav className="flex flex-col items-center gap-5 px-4">
            <button
              onClick={() => setSelected("profile")}
              className="w-56 py-2 bg-blue-700 text-white font-bold rounded-md hover:bg-blue-800"
            >Profile</button>
            
            <button
              onClick={() => setSelected("my-projects")}
              className="w-56 py-2 bg-white text-black font-bold border border-gray-300 rounded-md hover:bg-gray-100"
            >My Projects</button>

            <button
              onClick={() => setSelected("projects")}
              className="w-56 py-2 bg-blue-700 text-white font-bold rounded-md hover:bg-blue-800"
            >Browse Projects</button>

            <button
              onClick={() => setSelected("my-projects")}
              className="w-56 py-2 bg-white text-black font-bold border border-gray-300 rounded-md hover:bg-gray-100"
            >Saved Projects</button>

            <button
              onClick={() => setSelected("projects")}
              className="w-56 py-2 bg-blue-700 text-white font-bold rounded-md hover:bg-blue-800"
            >Applications</button>
          </nav>
        </div>

        <div>
          <Link
            href="/login"
            className="text-blue-600 hover:underline flex items-center gap-1"
          >
            <span className="text-xl">◀Log Out</span>
          </Link>
        </div>
      </aside>

      <main className="flex-grow p-10 overflow-y-auto bg-white">
        {renderContent()}
      </main>
    </div>
  );
}