import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

const savedProjects = [
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
];

export default function SavedProjects() {
  return (
    <div>
      <h2 className="text-6xl font-bold text-blue-700 mb-3 text-center">Saved Projects</h2>
      <hr className="mb-6 border border-blue-200"></hr>

      <div className="flex flex-wrap gap-10">
        {savedProjects.map((project) => (
          <div key={project.id}
            className="w-64 border border-black shadow-sm">
            <div className="bg-sky-200 px-2 py-1 border-b border-black text-center font-bold">
              {project.title}
            </div>

            <div className="p-3 text-sm">
              <p><span className="font-semibold">Majors:</span> {project.majors.join(", ")}</p>
              <p><span className="font-semibold">Skills:</span> {project.skills.join(", ")}</p>
              <p><span className="font-semibold">Duration:</span> {project.duration}</p>
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