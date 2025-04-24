import React, { useState, useEffect, useRef } from "react";
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
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedProject]);

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

      {/* <div className="relative"> */}
        <div className="flex flex-wrap justify-center gap-10">
          {dummyProjects.map((project) => (
            <div key={project.id}
              onClick={() => setSelectedProject(project)}
              className="w-64 border border-black shadow-sm cursor-pointer hover:shadow-lg">
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


        {selectedProject && (
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50">
            <div ref={modalRef} className="bg-gray-100 border-2 border-black w-[600px] rounded-md shadow-lg">
              <div className="text-center text-lg font-bold bg-sky-200 py-0.5 border-b-2 border-black rounded">{selectedProject.title}</div>

              <div className="space-y-5 p-6">
                <div className="flex">
                  <span className="font-semibold w-32 shrink-0">Project Initiator:</span>{" "}
                  <span className="font-semibold underline cursor-pointer whitespace-pre-wrap">Bob Ross</span>
                </div>

                <div className="flex">
                  <span className="font-semibold w-32 shrink-0">Description:</span>
                  <span className="whitespace-pre-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                </div>

                <div className="flex">
                  <span className="font-semibold w-32 shrink-0">Dates:</span>
                  <span className="whitespace-pre-wrap">5/10/2025 - 8/20/2025</span>
                </div>

                <div className="flex">
                  <span className="font-semibold w-32 shrink-0">Skills Wanted:</span>
                  <span className="whitespace-pre-wrap">{selectedProject.skills.join(", ")}</span>
                </div>

                <div className="flex">
                  <span className="font-semibold w-32 shrink-0">Graduate Level:</span>
                  <span className="whitespace-pre-wrap">Undergrad</span>
                </div>

                <div className="flex">
                  <span className="font-semibold w-32 shrink-0">Majors  Wanted: </span>
                  <span className="whitespace-pre-wrap">{selectedProject.majors.join(", ")}</span>
                </div>
              </div>

              <div className="flex justify-center gap-24 mt-6 pb-6">
                <button type="button" onClick={() => setSelectedProject(null)}
                  className="px-8 py-1 font-semibold border border-black rounded bg-gray-200 hover:bg-gray-300">Close
                </button>
                <button type="submit" className="px-8 py-1 bg-green-500 text-white font-semibold rounded hover:bg-green-600">Apply</button>
              </div>


            </div>
          </div>
        )}
      </div>
    // </div>
  );
}

