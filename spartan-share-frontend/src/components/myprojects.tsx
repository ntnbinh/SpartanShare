import React, { useState } from "react";
import NewProjectModal from "./newprojectmodal"

const Projects = [
  {
    id: 1,
    title: "Example Project 1",
    majors: ["Computer Science", "Software Engr"],
    skills: ["Full stack"],
    duration: "6 months",
  },

  {
    id: 2,
    title: "Example Project 2",
    majors: ["Mechanical Engr", "Software Engr"],
    skills: ["C++", "C"],
    duration: "1 Year",
  },
];

export default function MyProjects() {
  const [showModal, setShowModal] = useState(false);
  return (
    // <div className="max-w-6xl mx-auto">
    <div>
      <h2 className="text-6xl font-bold text-blue-700 mb-3 text-center">My Projects</h2>
      <hr className="mb-6 border border-blue-200"></hr>

      <div className="mb-10 flex justify-start">
        <div className="w-48 h-40 border border-gray-400 rounded-lg flex items-center justify-center 
                      text-gray-600 font-semibold text-xl hover:shadow cursor-pointer"
             onClick={() => setShowModal(true)}>
          + CREATE<br></br>
          NEW<br></br>
          PROJECT
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-4">My Posted Projects:</h3>

      <div className="flex flex-wrap gap-10">
        {Projects.map((project) => (
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

            <div className="flex justify-between px-3 pb-3">
              <button className="text-blue-600 font-semibold hover:underline">Edit</button>
              <button className="text-red-600 font-semibold hover:underline">Delete Project</button>
            </div>
          </div>
        ))}
      </div>

      {showModal && <NewProjectModal onClose={() => setShowModal(false)} />}
    </div>
  )
}