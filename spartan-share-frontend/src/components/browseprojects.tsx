import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

const dummyProjects = [
  {
    id: 1,
    title: "Example Project 1",
    majors: ["Computer Science", "Software Engr"],
    skills: ["Full stack"],
    duration: "6 months",
    favorited: true,
  },

  {
    id: 2,
    title: "Example Project 2",
    majors: ["Mechanical Engr", "Software Engr"],
    skills: ["C++", "C"],
    duration: "1 Year",
    favorited: true,
  },

  {
    id: 3,
    title: "Example Project 3",
    majors: ["Mechanical Engr", "Software Engr"],
    skills: ["C++", "C"],
    duration: "1 Year",
    favorited: false,
  },

  {
    id: 4,
    title: "Example Project 4",
    majors: ["Mechanical Engr", "Software Engr"],
    skills: ["C++", "C"],
    duration: "1 Year",
    favorited: false,
  },
];

export default function BrowseProjects() {
  const [search, setSearch] = useState("");
  const [selectedMajor, setSelectedMajor] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");

  return (
    <div>
      <h2 className="text-6xl font-bold text-blue-700 mb-3 text-center">Browse Projects</h2>
      <hr className="mb-6 border border-blue-200"></hr>

      <div className="flex items-center justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍Search Title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-400 rounded px-3 py-2 w-5/12"
          ></input>

        <select
          value={selectedMajor}
          onChange={(e) => setSelectedMajor(e.target.value)}
          className="bg-gray-200 border border-gray-400 rounded px-2 py-2 w-36">
          <option value="" disabled hidden>Major</option>
          <option>Computer Science</option>
          <option>Software Engr</option>
          <option>Mechanical Engr</option>
        </select>

        <select
          value={selectedDuration}
          onChange={(e) => setSelectedDuration(e.target.value)}
          className="bg-gray-200 border border-gray-400 rounded px-2 py-2 w-36">
          <option value="" disabled hidden>Duration</option>
          <option>1 Month</option>
          <option>3 Months</option>
          <option>6 Months</option>
          <option>1 Year+</option>
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {dummyProjects.map((project) => (
          <div key={project.id}
            className="w-64 border border-black shadow-sm">
            <div className="bg-sky-200 px-2 py-1 border-b border-black text-center font-bold">
              {project.title}
            </div>

            <div className="p-3 text-sm space-y-3">
              <div className="flex">
                <span className="font-semibold w-20 shrink-0">Majors:</span>
                <span className="whitespace-pre-wrap">{project.majors.join(", ")}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-20 shrink-0">Skills:</span>
                <span className="whitespace-pre-wrap">{project.skills.join(", ")}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-20 shrink-0">Duration:</span>
                <span className="whitespace-pre-wrap">{project.duration}</span>
              </div>
            </div>

            <div className="flex justify-end px-3 pb-3">
              <HeartIcon className={`h-5 w-5 cursor-pointer ${project.favorited ? "text-red-500" : "text-gray-400"}`}></HeartIcon>
            </div>
          </div>

        ))}
      </div>

    </div>
  );
}

